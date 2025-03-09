import pygame
import Assets
import Variables


class Bird(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.image = Assets.bird_images[0]
        self.rect = self.image.get_rect()
        self.rect.center= Variables.bird_starting_position
        self.image_index = 0
        self.vel = 0
        self.flap = False
        self.alive = True

    def update(self, user_input):
        # Bird Animations
        if self.alive:
            self.image_index += 1

        if self.image_index >= 30:
            self.image_index = 0

        self.image = Assets.bird_images[self.image_index // 10]

        #Gravity and Flap Animations
        self.image = pygame.transform.rotate(self.image, self.vel * 7)

        if user_input[pygame.K_SPACE] and not self.flap and self.rect.y > 0 and self.alive:
            Assets.wing_flap_sound.play()
            self.flap = True
            self.vel = -7


        self.vel += Variables.flap_velocity_increment

        if self.vel > 7:
            self.vel = 7

        if self.rect.y < 500:
            self.rect.y += int(self.vel)

        if self.vel == 0:
            self.flap = False