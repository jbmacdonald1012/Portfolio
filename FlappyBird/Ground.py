import pygame
import Assets
import Variables


class Ground(pygame.sprite.Sprite):
    def __init__(self, x, y):
        super().__init__()
        self.image = Assets.ground_image
        self.rect = self.image.get_rect()
        self.rect.x, self.rect.y = x, y

    def update(self):
        self.rect.x -= Variables.scroll_speed
        if self.rect.x <= -Variables.win_width:
            self.kill()