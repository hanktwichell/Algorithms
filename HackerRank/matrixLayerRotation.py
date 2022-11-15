import math
import os
import random
import re
import sys

def matrixRotation(matrix, r):
    m = len(matrix)
    n = len(matrix[0])
    numLoops = int(min(m,n)/2)
    for loop in range(numLoops):
        perimeter = 2*(m+n-2)-8*loop
        rotations = r%perimeter
        for i in range(rotations):
            matrix = rotateLoopOnce(matrix, m, n, loop)
    print('\n'.join([' '.join(['{}'.format(item) for item in row]) 
      for row in matrix]))   
        
def rotateLoopOnce(matrix, m, n, loop):
    botRow = m-1-loop
    rightCol = n-1-loop
    topLeft = matrix[loop][loop]
    topRight = matrix[loop][rightCol]
    botLeft = matrix[botRow][loop]
    botRight = matrix[botRow][rightCol]
    for i in range(n-(2*loop)-1):
        matrix[loop][loop+i] = matrix[loop][loop+i+1]
        matrix[botRow][rightCol-i] = matrix[botRow][rightCol-i-1]  
    for j in range(m-(2*loop)-1):
        matrix[botRow-j][loop] = matrix[botRow-j-1][loop]
        matrix[loop+j][rightCol] = matrix[loop+j+1][rightCol]
    matrix[loop+1][loop] = topLeft
    matrix[loop][rightCol-1] = topRight
    matrix[botRow][loop+1] = botLeft
    matrix[botRow-1][rightCol] = botRight
    topLeft = 0
    topRight = 0
    botLeft = 0
    botRight = 0
    return matrix
    
if __name__ == '__main__':
    first_multiple_input = input().rstrip().split()

    m = int(first_multiple_input[0])

    n = int(first_multiple_input[1])

    r = int(first_multiple_input[2])

    matrix = []

    for _ in range(m):
        matrix.append(list(map(int, input().rstrip().split())))

    matrixRotation(matrix, r)
