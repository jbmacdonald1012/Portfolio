import pygame
import Variables


class Pipe(pygame.sprite.Sprite):
    def __init__(self, x, y, image, pipe_type):
        super().__init__()
        self.image = image
        self.rect = self.image.get_rect()
        self.rect.x, self.rect.y = x, y
        self.enter, self.exit, self.passed = False, False, False
        self.pipe_type = pipe_type

    def update(self):
        #Pipe Movement
        self.rect.x -= Variables.scroll_speed

        if self.rect.right < 0:
            self.kill()

        if self.pipe_type == 'bottom':
            if Variables.bird_starting_position[0] > self.rect.topleft[0] and not self.passed:
                self.enter = True
            if Variables.bird_starting_position[0] < self.rect.topright[0] and not self.passed:
                self.exit = True
            if self.enter and self.exit and not self.passed:
                self.passed = True
                Variables.score += 1