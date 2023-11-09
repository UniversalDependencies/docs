---
udver: '2'
layout: relation
title: 'aux'
shortdef: 'auxiliary'
---


An [AUX]() (auxiliary) of a clause is a function word associated with a verbal predicate; the auxiliary expresses categories such as tense, mood, aspect, voice or evidentiality. It is often a verb (which may have non-auxiliary uses as well). The [aux]() dependency is established between the verb head and the auxiliary and it is directed from the verb to the auxiliary. 

The main auxiliary of Pomak is the verb *som* "I am", whose various morphological types help form the perfect tenses (Present Perfect, Past Perfect, Future Perfect - both Simple and Continuous, both Active and Passive Voice):

~~~ sdparse
fátiho trimína ad Bagladés óti so predávali  pres ádje 
"they caught three (people) from Bangladesh because they were selling without (a) permit"
aux (so, predávali)  
~~~


~~~ sdparse
tja je húbbava 
"she is good"
root (húbbava)
aux (je, húbbava)
nsubj (tja, húbbava)
~~~

Yet, there are two exceptions, when *som* has the meaning "to exist" and when it functions as an impersonal verb with a clausal subject; 
in such cases, *som* is assigned the PoS [VERB]() and is considered the head of its clause:


~~~ sdparse
je górmon ad pó napréš itám  
"a forest is nearby" 
root (je)
nsubj (je, górmon)
~~~


~~~ sdparse
tébe tí je jálnis da rečéš krívo 
lit:  to-you it is only to speak wicked 
"all you can do is to speak the wicked" 
root(je)
csubj(je, rečéš)
~~~

Another auxiliary of Pomak is *šom*. *še* "will" is it's most frequent type and  is used to form the Future Tense (both Simple and Continuous, Active and Passive Voice):

~~~ sdparse
ja še tí dam halvá 
I will give you halva (a kind of a candy)
aux (še, dam)
~~~
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:28 CET -->
