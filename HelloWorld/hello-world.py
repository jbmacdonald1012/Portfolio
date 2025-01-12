import time as time


def userPrompt():
    print()
    print('Starting Hello World.')
    time.sleep(2)
    
    userInput = input('Would you like to display the message? (y/n) ')

    if userInput.lower() =='y':
        displayMessage()
    elif userInput.lower() == 'n':
        print('Exiting program')
        time.sleep(1)
        exit()
    else:
        print('Incorrect input. Exiting program')
        time.sleep(1)
        exit

def displayMessage():
    print()
    print('Hello World!')
    print()
    
    userCloseInput = input('Press any key to exit the program: ')
    
    if userCloseInput:
        time.sleep(1)
        exit()

def main():
    userPrompt()

if __name__ == '__main__':
    main()
    