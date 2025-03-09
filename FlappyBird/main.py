import pygame
pygame.init()
import random
import Assets
import Variables

from sys import exit
from Bird import Bird
from Ground import Ground
from Pipe import Pipe

clock = pygame.time.Clock()

window = pygame.display.set_mode((Variables.win_width, Variables.win_height))
font = Variables.font
score = Variables.score
game_stopped = Variables.game_stopped

def quit_game():
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            exit()

def main():

    #Bird Instantiation
    bird_group = pygame.sprite.Group()
    bird = Bird()
    bird_group.add(bird)

    #Pipe Instantiation
    pipe_timer = 0
    pipes = pygame.sprite.Group()

    #Background and Ground Instantiation
    background_x_position, background_y_position = 0, 520
    ground = pygame.sprite.Group()
    ground.add(Ground(background_x_position, background_y_position))

    running = True
    while running:
        quit_game()

        window.fill((0,0,0))

        #User Inputs
        user_input = pygame.key.get_pressed()

        #Adds Background
        window.blit(Assets.background_image, (0, 0))

        if len(ground) <= 2:
            ground.add(Ground(Variables.win_width, background_y_position))

        #Drawing
        pipes.draw(window)
        ground.draw(window)
        bird_group.draw(window)

        #Display score on screen
        score_text = font.render("Score: " + str(Variables.score), True, (255, 255, 255))
        window.blit(score_text, (20, 20))

        #Update Drawings
        if bird.alive:
            pipes.update()
            ground.update()
        bird.update(user_input)

        #Collision Mechanics
        bird_collides_with_pipes = pygame.sprite.spritecollide(bird, pipes, False)
        bird_collides_with_ground = pygame.sprite.spritecollide(bird, ground, False)

        if bird_collides_with_pipes or bird_collides_with_ground:
            bird.alive = False
            if bird_collides_with_ground:
                window.blit(Assets.game_over, (Variables.win_width // 2 - Assets.game_over.get_width() // 2,
                                               Variables.win_height // 2 - Assets.game_over.get_height() // 2.))
                if user_input[pygame.K_r]:
                    Variables.score = 0
                    break


        #Add Pipes to screen
        if pipe_timer <= 0 and bird.alive:
            x_top, x_bottom = 550, 550
            y_top = random.randint(-600, -480)
            y_bottom = y_top + random.randint(90, 130) + Assets.pipe_bottom.get_height()
            pipes.add(Pipe(x_top, y_top, Assets.pipe_top, 'top'))
            pipes.add(Pipe(x_bottom, y_bottom, Assets.pipe_bottom, 'bottom'))
            pipe_timer = random.randint(180, 250)

        pipe_timer -= 1

        clock.tick(60)
        pygame.display.update()

def menu():
    while game_stopped:
        quit_game()
        window.fill((0,0,0))
        window.blit(Assets.background_image, (0, 0))
        window.blit(Assets.ground_image, Ground(0,520))
        window.blit(Assets.bird_images[0], Variables.bird_starting_position)
        window.blit(Assets.start_game, (Variables.win_width // 2 - Assets.start_game.get_width() // 2,
                                        Variables.win_height // 2 - Assets.start_game.get_height() // 2))

        user_input = pygame.key.get_pressed()
        if user_input[pygame.K_SPACE]:
            main()

        pygame.display.update()

if __name__ == '__main__':
    menu()