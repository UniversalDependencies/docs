---
udver: '2'
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
---


An appositional modifier (appos) of a noun is a nominal immediately following the first noun that serves to define, modify, name, or describe that noun. 
It includes parenthesized examples, as well as defining abbreviations in one of these structures. This dependency also appears in Pomak:

~~~ sdparse
mójes brat, Harílaos, rábati sas kompjúter 
my brother, Harilaos, works with computers
appos  (brat, Harílaos)
~~~ 
 
~~~ sdparse
padišahon, fkýsnat, mu  je reklól 
the king told him in anger 
lit: king-the, angry, him has told
appos  (padišahon, fkýsnat)  
~~~ 


However, in rare cases when two or more appositive nominal exist, all nouns should be marked as modifying the first noun, rather than being chained:
   
 ~~~ sdparse
faf tóga so našlíli mlógo rábaty, drípy, vrit  ukrádeny 
on him  many things were found, clothes, all stolen
appos (rábaty, drípy)
appos (rábaty, ukrádeny)
 ~~~ 
 
As mentioned elsewhere,  appos relation may label parts in between a list chain:   

 ~~~ sdparse
Apóstolos Ǵiǵikóstas, Atína, teléfono 696969787878, e-mail Apostolos@gmail.gr
flat:name (Apóstolos, Ǵiǵikóstas)
list (Apóstolos, Atína)
list (Apóstolos, teléfono)
list (Apóstolos, e-mail)
appos (teléfono, 696969787878)
appos (e-mail, Apostolos@gmail.gr)
 ~~~ 
