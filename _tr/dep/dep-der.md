---
layout: relation
title: 'dep:der'
shortdef: 'derivational suffix'
udver: '2'
---

Turkish has two types of -ki suffix: Pronominal -ki and
Adjectival -ki. The main difference between these two
is the fact that numerous inflectional morphemes can occur
before adjectival -ki. Regarding derivational morphemes as
opaque causes a loss of significant information. Hence 
splitting adjectival -ki from its stem allows more in-depth
annotations. 


We use dep:der relation to connect the splitted adjectival
-ki to its stem:
The stem hosting adjectival -ki is annotated as a NOUN,
adjectival -ki is connected to the stem as its dependent.

~~~ sdparse
Mağazalardaki elbiseleri gördüm . \n I saw the dresses at stores
dep:der(ki, Mağazalar)
~~~

~~~ sdparse
Sendeki kitabı bilmiyorum . \n I don't know the book you have
dep:der(ki, Sende)
~~~

### References
Hankamer, Jorge. _An ad-phrasal affix in Turkish_. 
MIT Working Papers in Linguistics 46 (2004): 289-299.
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:47 CET -->
