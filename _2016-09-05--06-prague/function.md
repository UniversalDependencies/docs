---
layout: base
title:  'Function words in UD v2'
---

# Function words in UD v2

<!-- Background -->

## References 

#  https://github.com/UniversalDependencies/docs/issues/329
# http://universaldependencies.org/2015-08-23-uppsala/copula.html
# https://github.com/UniversalDependencies/docs/issues/256

## Copula constructions 

### Status quo

<!-- Some languages have very many copula verbs -->

* Languages are inconsistent with how they treat copula constructions. Some languages are very permissive with copula verbs (e.g. French has over 50 finite verbs with the `cop` relation).

<!-- Lasai nago | pozik nago -->

### Principles

* For copulas, we should be maximally restrictive with respect to which verbs can be copulas (only one verb in most languages) but maximally permissive when it comes to treating this verb as cop. Basically, the copula verb should never be the root, except through promotion (“he is not happy, but she is”). 
** That is: Any situation where we link a subject to "more information" should be considered copula 
** For languages where more copulas are used (e.g. Spanish, Basque, Catalan, Turkish, Kazakh), these are permitted, but only the copulas that are equivalent to English 'be'. That is, English "become" and Swedish "ble" are out.
* We need to give more detailed guidelines for choosing the predicate in copula sentences when it is not one of the obvious cases (noun, adjective). Idea: use obliqueness hierarchy.
* We may want to add the subtype `nsubj:cop` to avoid having to flip dependencies when the predicate is a clause. It may also be used more generally to signal that the subject in copula constructions is special.

<!-- Fran: -->

* We may want to be able to distinguish `nmod` when it attaches to clauses and when it attaches to nominals (e.g. "I am a teacher this morning", "I am a teacher in the university.")

### Examples and recommendation

#### Simple predication

People are generally happy with the copula being a dependent of the predicating 
element where it is a noun or an adjective. As mentioned in the documentation this improves 
crosslingual consistency. 

English: 
~~~ sdparse
She is a student .
~~~ 

Russian:
~~~ sdparse
Она студент . \n She student .
~~~ 

Turkish (and Turkic):
~~~ sdparse
O öğrenci . \n She student .
~~~ 

Finnish (and Balto-Finnic, Samic):
~~~ sdparse
Se on opiskelija . \n She is student .
~~~

Spanish (and other Romance):
~~~ sdparse
Ella és estudiant .
~~~

Basque:
~~~ sdparse 
Ainhoa ikaslea da . \n Ainhoa student.ART is .
~~~

It also improves intra-language consistency, as can be seen if we put the example 
into the past tense. In both Russian and Turkish the structure remains the same, but 
would be different if we had the copula verb as the head.

English:
~~~ sdparse
She was a student .
~~~ 

Russian:
~~~ sdparse
Она была студент . \n She was student .
~~~ 

Turkish (and Turkic):
~~~ sdparse
O öğrenci -di . \n She student was .
~~~ 

Finnish (and Balto-Finnic, Samic):
~~~ sdparse
Se oli opiskelija . \n She was student .
~~~

Spanish (and other Romance):
~~~ sdparse
Ella fue estudiante . \n She was student .
~~~

Note also that in Turkish (and other Turkic languages) the copula verb can alternate 
between tenses, here the future is expressed with ol- instead of i-:

~~~ sdparse
O öğrenci olacak . \n She student will.be .
~~~

There may be other alternations, for example between state and essence:

Spanish:
~~~ sdparse 
Ella es buena . \n She is good .
~~~ 

~~~ sdparse
Ella está buena . \n She is attractive .
~~~

Or: 

Basque:
~~~ sdparse 
Ni ikaslea naiz . \n I student am .
~~~

~~~ sdparse 
Ni pozik nago . \n I happy am .
~~~

In Irish, there is a distinction between the copula and the existential verb:

<!-- Wikipedia 
Both the existential verb and the copula may take a nominal predicate, but the two constructions have slightly different meanings:  -->

~~~ sdparse 
Is dochtúir é Seán \n COP doctor he Seán 
~~~

<!--
sounds more permanent: it represents something absolute about Seán; it is a permanent characteristic of Seán that he is a doctor. That is known as an individual-level predicate. In the sentence: -->

~~~ sdparse 
Tá Seán ina dhochtúir \n EXIST Sean in.his doctor  
~~~ 
<!-- one says rather that Seán performs the job of a doctor, he is a doctor at the moment, or he has become a doctor. That is known as a stage-level predicate. -->

Currently in the Irish treebank only "is"-style copulas get `cop`, "tá"-style are verb rooted with `xcomp:pred`

A similar thing can happen in Swedish:

~~~ sdparse
Men jag är bara 21 och du blev 23 . \n But I am only 21 and you were 23 .
~~~
<!-- FMT: Check, is 'blev' here "were" or "had become" -->

#### Predication with attributive-like NPs

People are also generally happy with using the same structure for prepositional phrases that have some kind 
of non-compositional attributive-like meaning:

English:
~~~ sdparse
She is in great shape . 
~~~

~~~ sdparse
She is really on the ball with this .
~~~

Spanish:
~~~ sdparse
Esa canción está de puta madre . 
~~~

Irish: 
~~~ sdparse 
Tá sí ar meisce . \n EXIST she in drunkenness .
~~~ 

#### Adverbials: time and location

Having the copula as a head was slightly less accepted for constructions where there is some kind of compositional prepositional phrase or adverbial.

Issues with this analysis are:
* Which adverbial should become the head in expressions with more than one adverbial ?
** Should we make a technical decision and simply choose the first (or last?)

~~~ sdparse 
She is here . 
~~~ 

~~~ sdparse 
Hemen dago . \n Here she.is
~~~
 
~~~ sdparse
She is in Prague with her friends . 
~~~

~~~ sdparse 
I am on my way . 
~~~

~~~ sdparse
Она в Праге с друзьями . \n She in Prague with friends .
~~~

~~~ sdparse
O arkadaşıla Pragada . \n She with.her.friends in.Prague .
~~~

~~~ sdparse
Se on Pragassa kaverinkaa . 
~~~

~~~ sdparse
Ella és a Praga amb els amics . \n She is in Prague with the friends . 
~~~

~~~ sdparse
She was in Prague with her friends . 
~~~

~~~ sdparse
Tá sí i bPrág le cairde . \n EXIST her in Prague with friends .
~~~

~~~ sdparse
Она была в Праге с друзьями . \n She was in Prague with friends .
~~~

~~~ sdparse
O arkadaşıla Pragada -dı . \n She with.her.friends in.Prague was .
~~~

~~~ sdparse
Ella estava a Praga amb els amics . \n She was in Prague with the friends .
~~~

~~~ sdparse
Se oli Pragassa kaverinkaa . \n She was in.Prague with.friends .
~~~

~~~ sdparse
The gods were not with us on that one . 
~~~ 

~~~ sdparse
She walked in and was out of there in 10 minutes . 
~~~

~~~ sdparse 
Det var i förrgår när jag stod och väntade på dig . \n It was last year when I stood and waited for you .
~~~

~~~ sdparse 
Dom ställena du gick till , det är dit jag brukar gå . \n The places you went to , it is to.there i usually go .
~~~

#### Existential constructions 

Currently, existential constructions have a special structure in English:

~~~ sdparse
There is a book on the table .
~~~

....

~~~ sdparse
Есть книга в столе . \n There.is book on table .
~~~

~~~ sdparse
Была книга в столе . \n Was book on table .
~~~

~~~ sdparse
C' è un libro sopra il tavolo . \n There is a book on the table .
~~~

However, this quickly becomes awkward:

~~~ sdparse
For the last few years there have been problems with the programme .
~~~

~~~ sdparse 
How long have there been problems with the programme ? 
~~~

~~~ sdparse
Have there been problems with the programme for the last few years ? 
~~~

~~~ sdparse
What has there been with the programme for the last few years ? 
~~~

~~~ sdparse
There is a lot to learn about Chernobyl . 
~~~

~~~ sdparse
Tá leabhar ann . \n EXIST book in.it .
~~~

~~~ sdparse
Tá leabhar ar an mbord . \n EXIST book on the table .
~~~ 

There is no problem however for Turkic languages, where existential constructions are similar to simple predication with an adjective like var "existing", and yok "not.existing" .

~~~ sdparse
Masada kitap var . \n On.table book existing .
~~~

~~~ sdparse
Masada kitap var -dı . \n On.table book existing was .
~~~

There is also no problem for Western Romance languages where a different structure is used:

~~~ sdparse
Hay un libro en la mesa . \n There.is a book on the table .
~~~

And Serbo-Croatian: 

~~~ sdparse 
Međutim , ima i dobrih vesti . \n But, have too good news .
~~~

This also goes for Scandinavian languages:

~~~ sdparse
Hur många invandrare finns det i Sverige ? \n How many immigrants are there in Sweden ?
~~~

#### Clausal arguments

~~~ sdparse 
Being well-informed will give you certainty .
~~~

~~~ sdparse 
To be free is to be capable of thinking one's own thoughts .
~~~ 

~~~ sdparse 
The main thing is that the device works . 
~~~

~~~ sdparse
Is é an príomhrud ná go bhfeidhmíonn an gléas . \n COP it the main.thing that PART works the device .
~~~

~~~ sdparse
Трудно быть богом . \n Hard to.be god 
~~~

~~~ sdparse
Tá sé deacair a bheith i do Dhia .
~~~

~~~ sdparse 
Två viktiga ting är att säga om svårigheter i äktenskap . \n Two important things are to say about difficulties in marriage .
~~~

~~~ sdparse 
En nödvändig förutsättning är att männen är helt med på saken . \n An important precondition is that the.man is totally onboard about the.thing .
~~~

#### Ambiguities with auxiliary verbs

The following uses should not be considered copula.

~~~
I am reading these examples . 
~~~

~~~
The following criteria are considered .
~~~

~~~
Книга была прочитанно . 
~~~

~~~
El consumo de carne humano es considerado aceptable . \n The consumption of flesh human is considered acceptable .
~~~

~~~
Det är skrivet till mig själv . \n It is written to my self .
~~~

#### Other types 

~~~ sdparse 
This period in Athens, between 335 and 400 , is when Aristotle is believed to have lived .
~~~

#### Imperatives 

~~~ 
Be quiet ! 
~~~

#### Idiomatic expressions 

~~~ sdparse
Let there be light ! 
~~~

~~~ sdparse
I have been to Prague .
~~~

## Other functional relations

* The other functional relations are less problematic, but more detailed guidelines will be useful.
