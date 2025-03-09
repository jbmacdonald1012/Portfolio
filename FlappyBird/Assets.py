import pygame
pygame.mixer.init()

bird_images = [
    pygame.image.load('assets/bird_down.png'),
    pygame.image.load('assets/bird_mid.png'),
    pygame.image.load('assets/bird_up.png')
]
background_image = pygame.image.load('assets/background.png')
ground_image = pygame.image.load('assets/ground.png')
pipe_top = pygame.image.load('assets/pipe_top.png')
pipe_bottom = pygame.image.load('assets/pipe_bottom.png')
game_over = pygame.image.load('assets/game_over.png')
start_game = pygame.image.load('assets/start.png')

collision_sound = pygame.mixer.Sound('assets/pipe_collide_sound.mp3')
wing_flap_sound = pygame.mixer.Sound('assets/wing_flap.mp3')
score_point_sound = pygame.mixer.Sound('assets/score_point.mp3')
