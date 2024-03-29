<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use App\Controller\CreateImageAction;

/**
 * @ApiResource(
 *     iri="http://schema.org/Image",
 *     normalizationContext={
 *         "groups"={"media_object_read"},
 *     },
 *     collectionOperations={
 *         "post"={
 *             "controller"=CreateImageAction::class,
 *             "deserialize"=false,
 *             "validation_groups"={"Default", "media_object_create"},
 *             "swagger_context"={
 *                 "consumes"={
 *                     "multipart/form-data",
 *                 },
 *                 "parameters"={
 *                     {
 *                         "in"="formData",
 *                         "name"="file",
 *                         "type"="file",
 *                         "description"="The file to upload",
 *                     },
 *                 },
 *             },
 *         },
 *         "get",
 *     },
 *     itemOperations={
 *         "get",
 *     },
 * )
 * @ORM\Entity(repositoryClass="App\Repository\ImageRepository")
 * @Vich\Uploadable
 */
class Image
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    //private $label;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     */
    private $name;

    /**
     * @Vich\UploadableField(mapping="images", fileNameProperty="name")
     * @var File
     */
    public $file;

    /**
     * @ORM\Column(type="datetime")
     * @var \DateTime
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Card", mappedBy="image")
     */
    private $cards;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\ImageCategory", inversedBy="images")
     */
    private $category;

    public function getId(): ?int
    {
        return $this->id;
    }

    /*
    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(string $label): self
    {
        $this->label = $label;
        return $this;
    }*/

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function setFile(File $file = null)
    {
        $this->file = $file;

        // VERY IMPORTANT:
        // It is required that at least one field changes if you are using Doctrine,
        // otherwise the event listeners won't be called and the file is lost
        if ($file) {
            // if 'updatedAt' is not defined in your entity, use another property
            $this->updatedAt = new \DateTime('now');
        }
    }

    public function getFile()
    {
        return $this->file;
    }

    public function __toString() {
      return $this->name;
    }

    public function __construct() {
      $this->updatedAt = new \DateTime('now');
      $this->cards = new ArrayCollection();
    }

    /**
     * @return Collection|Card[]
     */
    public function getCards(): Collection
    {
        return $this->cards;
    }

    public function addCard(Card $card): self
    {
        if (!$this->cards->contains($card)) {
            $this->cards[] = $card;
            $card->setImage($this);
        }

        return $this;
    }

    public function removeCard(Card $card): self
    {
        if ($this->cards->contains($card)) {
            $this->cards->removeElement($card);
            // set the owning side to null (unless already changed)
            if ($card->getImage() === $this) {
                $card->setImage(null);
            }
        }

        return $this;
    }

    public function getCategory(): ?ImageCategory
    {
        return $this->category;
    }

    public function setCategory(?ImageCategory $category): self
    {
        $this->category = $category;

        return $this;
    }
}
