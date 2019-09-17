<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class UserFixtures extends Fixture
{
    public const SIMPLE_USER_REFERENCE = 'user';
    public const SIMPLE_ADMIN_REFERENCE = 'admin';

    public function load(ObjectManager $manager)
    {
      // admin user
      $user = new User();
      $user->setEmail('admin@montessori');
      $user->setPassword('admin');
      // $user->setEnabled(true);
      $user->setRoles(array('ROLE_ADMIN'));
      $manager->persist($user);
      $manager->flush();

      $this->addReference(self::SIMPLE_ADMIN_REFERENCE, $user);

      // classic user
      $user = new User();
      $user->setEmail('user@montessori');
      $user->setPassword('user');
      // $user->setEnabled(true);
      $user->setRoles(array('ROLE_USER'));
      $manager->persist($user);
      $manager->flush();

      $this->addReference(self::SIMPLE_USER_REFERENCE, $user);
    }
}
