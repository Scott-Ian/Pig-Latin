# _{Application Name}_

#### _{Brief description of application}, {Date of current version}_

#### By _**{List of contributors}**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

## Specifications/User Stories

_The Program does nothing to non-alphabetical characters, since they do not contain consonants or vowels_
* Example Input: 3
* Example Output: 3
* _Is Complete_: _True_

_The program adds "way" to single-letter words beginning with a vowel_
* Example Input: i
* Example Output: iway
* _Is Complete_: _True_

_For words beginning with a single consonant the program moves the consonant to the end of the word_
* Example Input: change
* Example Output: hangec
* _Is Complete_: _True_

_For words beginning with a single consonant the program moves the consonant to the end of the word and adds "ay"_
* Example Input: change
* Example Output: hangecay
* _Is Complete_: _True_

_For words beginning with one or more consecutive consonants the program moves the consonants to the end of the word_
* Example Input: Theodore
* Example Output: eodoreThay
* _Is Complete_: _True_

_For words beginning with one or more consecutive consonants the program moves the consonants to the end of the word and adds "ay"_
* Example Input: Theodore
* Example Output: eodoreThay
* _Is Complete_: _True_

_For words beginning with "Y", treat "Y" as a consonant_
* Example Input: Yes
* Example Output: esYay
* _Is Complete_: _True_

_For words beginning with "qu", the program moves "qu" to the end of the word, and does not add "ay" or "way"_
* Example Input: queerly
* Example Output: eerlyqu
* _Is Complete_: _True_

_For words beginning wih consonants, but include "QU" before the first vowel, the program will include "QU" in the string of consonants moved to the end of the word before adding "ay"_
* Example Input: squeal
* Example Output: ealsquay
* _Is Complete_: _False_

_The program manipulates entire sentences and not just single words, as per the specifications listed above_
* Example Input: I like apples
* Example Output: Iway ikeay pplesaway
* _Is Complete_: _False_


### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

https://choosealicense.com/
https://en.wikipedia.org/wiki/MIT_License
https://en.wikipedia.org/wiki/GNU_General_Public_License

Copyright (c) 2016 **_{List of contributors or company name}_**