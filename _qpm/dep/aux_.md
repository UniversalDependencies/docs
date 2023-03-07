---
udver: '2'
layout: relation
title: 'aux'
shortdef: 'auxiliary'
---


An aux (auxiliary) of a clause is a function word associated with a verbal predicate that expresses categories such as tense, mood, aspect, voice or evidentiality. 
It is often a verb (which may have non-auxiliary uses as well), yet many languages have nonverbal TAME markers and these are also treated as instances of aux.

In Pomak the main auxiliary is the verb som (I am), whose various morphological types help form the perfect tenses (Present Perfect, Past Perfect, Future Perfect - both Simple and Continuous, both Active and Passive Voice):

~~~ sdparse
fátiho trimína ad Bagladés óti so predávali  pres ádje 
they caught three (people) from Bangladesh because they were selling without (a) permit
aux (so, predávali)  
~~~

In accordance to the above mentioned, in Pomak annotating, som has been marked under the labels AUX / aux and not as VERB, even though it might be the only verbal form of a clause;
therefore the predicative is marked as the root and all the rest dependents attach to it:  

~~~ sdparse
tja je húbbava 
she is good
root (húbbava)
aux (je, húbbava)
nsubj (tja, húbbava)
~~~

Yet, there are two exceptions, when som has the meaning of “existing” or when it consists an impersonal phrase (followed by a clausal subject); 
then it is labeled as a VERB and marked as the root of the clause, while all dependents are attached to it:

~~~ sdparse
je górmon ad pó napréš itám  
a forest is nearby 
lit: a forest is near there
root (je)
VERB (je)
nsubj (je, górmon)
~~~

~~~ sdparse
tébe tí je jálnis da rečéš krívo 
all you can do is to speak the wicked 
lit:  to-you it is only to speak wicked 

root (je)
VERB (je)
csubj je, (rečéš)
~~~


However, in Pomak there is also the auxiliary šom predominantly in its type še (will), 
that helps form the Future Tense (both Simple and Continuous, Active and Passive Voice):

~~~ sdparse
ja še tí dam halvá 
I will give you halva (a kind of a candy)
aux (še, dam)
~~~
