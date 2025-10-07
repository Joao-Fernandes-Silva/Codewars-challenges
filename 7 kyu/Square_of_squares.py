def is_square(n):
    import numpy as np

    x = np.sqrt(n)

    if n < 0: 
        return False
    
    if x.is_integer():
        return True
    return False