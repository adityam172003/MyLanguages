#include<stdio.h>


// Header files 

/*
    The first and foremost component is the inclusion of the Header files in a C program.
    A header file is a file with extension .h which contains C function declarations and
    macro definitions to be shared between  several source files.  All lines that  start
    with # are processed by a preprocessor which is a program invoked by the compiler.In 
    the above example, the preprocessor copies the  preprocessed code of stdio.h to  our
    file. The .h files are called header files in C.

    # is a Preprocessing directive 
        These preprocessor directives are used to instruct the compiler to process these
        files before compilation.

    Various other Header files 

    stddef.h – Defines several useful types and macros.
    stdint.h – Defines exact width integer types.
    stdio.h  – Defines core input and output functions
    stdlib.h – Defines numeric conversion functions, pseudo-random number generator, and memory allocation
    string.h – Defines string handling functions
    math.h   – Defines common mathematical functions.

    learn more : https://www.javatpoint.com/c-header-files  
*/


// about int main()  AND void main()
/*
        Using void main in C/C++ is considered non-standard and incorrect.
        void main() in C/C++ has no  defined(legit)  usage,  and  it  can 
        behave unexpectedly or sometimes throw garbage results or an error.
        
        
        However some compilers may support void main() or main() without 
        parameters, it is not considered good practice and can   lead to
        unexpected behavior of the code when  run  on  other   platforms  
        This definition is not and never has been in C++,  nor has    it
        even been in C.



        in this program if we write void main() it works but it is not 
        good practice we should write int main() and return 0 after 
        program 

        the ways we can declare main method in c 

        int main()
        {
            // body 

            return 0;
        }



        int main(int argc, char* argv[]){
            // body


            return 0;
        }

*/


int main(int argc,char*argv[]){

    // commands to run 
    // 1 ] g++ filename.c
    // 2 ] ./a.out arg1 arg2 
    
    printf("First Program In C\n");
    printf("%d\n",argc);
    printf("%s\n", argv[1]);

    return 0;

}

