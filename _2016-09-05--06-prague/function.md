---
layout: base
title:  'Function words in UD v2'
---

# Function words in UD v2

<!-- Background -->

## References 

# http://universaldependencies.org/u/dep/cop.html
#  https://github.com/UniversalDependencies/docs/issues/329
# http://universaldependencies.org/2015-08-23-uppsala/copula.html
# https://github.com/UniversalDependencies/docs/issues/256

## Copula constructions 

### Status quo

<!-- Some languages have very many copula verbs -->

* Languages are inconsistent with how they treat copula constructions. Some languages are very permissive with copula verbs (e.g. French has over 50 finite verbs with the `cop` relation).

<!-- Lasai nago | pozik nago -->

### From the meeting

* For copulas, we should be maximally restrictive with respect to which words can be copulas (only one word in most languages) but maximally permissive when it comes to treating this word as a copula. Basically, the copula should never be the root, except through promotion (“he is not happy, but she is”). 
** That is: Any situation where we link a subject to "more information" should be considered copula 
** For languages where more copulas are used (e.g. Spanish, Basque, Catalan, Turkish, Kazakh), these are permitted, but only the copulas that are equivalent to English 'be'. That is, English "become" and Swedish "bli" are out.
* We need to give more detailed guidelines for choosing the predicate in copula sentences when it is not one of the obvious cases (noun, adjective). Idea: use obliqueness hierarchy.
* We should add the subtype `nsubj:cop` to avoid having to flip dependencies when the predicate is a clause. It should also be used more generally to signal that the subject in copula constructions is special.

<!-- Fran: -->

* We may want to be able to distinguish `nmod` when it attaches to clauses and when it attaches to nominals (e.g. "I am a teacher this morning", "I am a teacher in the university.")

### Examples and recommendation

Copulas are often used for: 

* Simple predication
** This includes nominals (nouns, adjectives) and also nominal like/more fixed PPs (in shape)
* Indicating location in time or space of something
* Existential constructions, indicating that something exists

Recommendation:

* Use the `cop` relation for predication and location, this maximises similarity between languages 
** All subjects of in these constructions should receive `nsubj:cop`
* Use copula as `root` for existential structures "There is a book on the table"
** The subject should be a simple `nsubj`

#### Simple predication

People are generally happy with the copula being a dependent of the predicating 
element where it is a noun or an adjective. As mentioned in the documentation this improves 
crosslingual consistency. 

English: 
~~~ sdparse
She is a student .
cop(student, is)
det(student, a)
nsubj:cop(student, She)
punct(student, .)
~~~ 

Russian:
~~~ sdparse
Она студент . \n She student .
nsubj:cop(студент, Она)
punct(студент, .)
~~~ 

Turkish (and Turkic):
~~~ sdparse
O öğrenci . \n She student .
nsubj:cop(öğrenci, O)
punct(öğrenci, .)
~~~ 

Finnish (and Balto-Finnic, Samic):
~~~ sdparse
Se on opiskelija . \n She is student .
nsubj:cop(opiskelija, Se)
cop(opiskelija, on)
punct(opiskelija, .)
~~~

Spanish (and other Romance):
~~~ sdparse
Ella es estudiante .
cop(estudiante, es)
nsubj:cop(estudiante, Ella)
punct(estudiante, .)
~~~

Basque:
~~~ sdparse 
Ainhoa ikaslea da . \n Ainhoa student.ART is .
cop(ikaslea, da)
nsubj:cop(ikaslea, Ainhoa)
punct(ikaslea, .)
~~~

It also improves intra-language consistency, as can be seen if we put the example 
into the past tense. In both Russian and Turkish the structure remains the same, but 
would be different if we had the copula verb as the head.

English (Finnish, Spanish function the same):
~~~ sdparse
She was a student .
cop(student, was)
nsubj:cop(student, She)
~~~ 

Russian:
~~~ sdparse
Она была студент . \n She was student .
cop(студент, была)
nsubj:cop(студент, Она)
~~~ 

Turkish (and Turkic):
~~~ sdparse
O öğrenci -di . \n She student was .
cop(öğrenci, -di)
punct(öğrenci, .)
nsubj:cop(öğrenci, O)
~~~ 

Note also that in Turkish (and other Turkic languages) the copula verb can alternate 
between tenses, here the future is expressed with ol- instead of i-:

~~~ sdparse
O öğrenci olacak . \n She student will.be .
cop(öğrenci, olacak)
nsubj:cop(öğrenci, O)
~~~

There may be other alternations, for example between state and essence:

Spanish:
~~~ sdparse 
Ella es buena . \n She is good .
cop(buena, es)
nsubj:cop(buena, Ella)
~~~ 

~~~ sdparse
Ella está buena . \n She is attractive .
cop(buena, está)
nsubj:cop(buena, Ella)
~~~

Or: 

Basque:
~~~ sdparse 
Ni ikaslea naiz . \n I student am .
cop(ikaslea, naiz)
nsubj:cop(ikaslea, Ni)
~~~

~~~ sdparse 
Ni pozik nago . \n I happy am .
cop(pozik, nago)
nsubj:cop(pozik, Ni)
~~~

In Irish, there is a distinction between the copula and the existential verb:

<!-- Wikipedia 
Both the existential verb and the copula may take a nominal predicate, but the two constructions have slightly different meanings:  -->

~~~ sdparse 
Is dochtúir é Seán \n COP doctor he Seán 
cop(dochtúir, Is)
nsubj:cop(dochtúir, Seán)

~~~

<!--
sounds more permanent: it represents something absolute about Seán; it is a permanent characteristic of Seán that he is a doctor. That is known as an individual-level predicate. In the sentence: -->

~~~ sdparse 
Tá Seán ina dhochtúir \n EXIST Sean in.his doctor  
~~~ 
<!-- one says rather that Seán performs the job of a doctor, he is a doctor at the moment, or he has become a doctor. That is known as a stage-level predicate. -->

Currently in the Irish treebank only "is"-style copulas get `cop`, "tá"-style are verb rooted with `xcomp:pred`

A similar thing can happen in Swedish with an alternation between state and change of state:

~~~ sdparse
Men jag är bara 21 och du blev 23 . \n But I am only 21 and you had.become 23 .
cop(21, är)
nsubj:cop(21, jag)
nsubj(blev, du)
conj(21, blev)
cc(21, och)
xcomp(blev, 23)
~~~
<!-- FMT: Check, is 'blev' here "were" or "had become" -->

#### Predication with attributive-like NPs

People are also generally happy with using the same structure for prepositional phrases that have some kind 
of non-compositional attributive-like meaning:

English:
~~~ sdparse
She is in great shape . 
cop(shape, is)
amod(shape, great)
case(shape, in)
nsubj:cop(shape, She)
punct(shape, .)
~~~

~~~ sdparse
She is really on the ball with this .
~~~

Spanish:
~~~ sdparse
Esa canción está de puta madre . 
det(canción, Esa)
nsubj:cop(madre, canción)
cop(madre, está)
case(madre, de)
amod(madre, puta)
punct(madre, .)
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

But in many languages with "dropped"/"empty" copula, this also applies to adverbials:

~~~ sdparse
Она в Праге с друзьями . \n She in Prague with friends .
~~~

~~~ sdparse
O arkadaşıla Praga'da . \n She with.her.friends in.Prague .
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
O arkadaşıla Praga'da -dı . \n She with.her.friends in.Prague was .
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

Currently, existential constructions have a special structure in English, where the copula verb is head:

~~~ sdparse
There is a book on the table .
expl(is, There)
nsubj(is, book)
~~~

....

In some languages, there can be ambiguities between something being a "bare" copula and an existential copula, 

Finnish:
~~~ sdparse
Kirja on pöytässä . \n Book on table .
~~~ 

Could mean either "(The) book is on (the) table." or "There is (a) book on (the) table."

~~~ sdparse
Есть книга в столе . \n There.is book on table .
~~~

It can sometimes be disambiguated by the case of the predicate:

~~~ sdparse
Был студент в факультете . \n There.was student in faculty .
~~~

~~~ sdparse
Был студентом в факультете . \n Was as.student in faculty .
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
nsubj:cop(var, kitap)
nmod(var, Masada)
punct(var, .)
~~~

~~~ sdparse
Masada kitap var -dı . \n On.table book existing was .
nsubj:cop(var, kitap)
cop(var, -dı)
nmod(var, Masada)
punct(var, .)
~~~

There is also no problem for Western Romance languages where a different structure is used:

~~~ sdparse
Hay un libro en la mesa . \n There.is a book on the table .
dobj(Hay, libro)
nmod(Hay, mesa)
~~~

And Serbo-Croatian: 

~~~ sdparse 
Međutim , ima i dobrih vesti . \n But, have too good news .
amod(vesti, dobrih)
advmod(ima, i)
x(ima, vesti)
~~~

This also goes for Scandinavian languages:

~~~ sdparse
Hur många invandrare finns det i Sverige ? \n How many immigrants are there in Sweden ?
advmod(många, Hur)
amod(invandrare, många)
nsubj(finns, invandrare)
expl(finns, det)
case(Sverige, i)
nmod(finns, Sverige)
~~~

#### Clausal arguments

~~~ sdparse 
Being well-informed will give you certainty .
cop(well-informed, Being)
aux(give, will)
iobj(give, you)
dobj(give, certainty)
csubj(give, well-informed)
~~~

When we have copula clauses as both subject and predicate, then the predicate will receive two copulas:

~~~ sdparse 
To be free is to be capable of thinking one's own thoughts .
cop(free, be-2)
mark(free, To)
cop(capable, be-6)
csubj:cop(capable, free)
mark(capable, to)
dobj(thinking, thoughts)
amod(thoughts, own)
det(thoughts, one's)
cop(capable, is)
mark(thinking, of)
advcl(capable, thinking)
~~~ 

We may want to distinguish the "external" copula relation from the "internal" one.

~~~ sdparse 
The main thing is that the device works . 
amod(thing, main)
det(thing, The)
det(device, the)
nsubj(works, device)
mark(works, that)
cop(works, is)
nsubj:cop(works, thing)
~~~

~~~ sdparse
Is é an príomhrud ná go bhfeidhmíonn an gléas . \n COP it the main.thing that PART works the device .
~~~

~~~ sdparse
Трудно быть богом . \n Hard to.be god 
cop(богом, быть)
csubj:cop(Трудно, богом)
punct(Трудно, .)
~~~

~~~ sdparse
Трудно было быть богом . \n Hard was to.be god 
cop(Трудно, было)
cop(богом, быть)
csubj:cop(Трудно, богом)
punct(Трудно, .)
~~~

~~~ sdparse
Tá sé deacair a bheith i do Dhia .
~~~

~~~ sdparse 
Två viktiga ting är att säga om svårigheter i äktenskap . \n Two important things are to say about difficulties in marriage .
~~~
<!-- Compare with  "Det finns två viktiga ting att säga om svårigheter i äktenskap ." -->

~~~ sdparse 
En nödvändig förutsättning är att männen är helt med på saken . \n An important precondition is that the.man is totally onboard about the.thing .

~~~

#### Ambiguities with auxiliary verbs

The following uses should not be considered copula, the "to be" verb should be labelled with `aux` or `aux:pass`:

~~~ sdparse
I am reading these examples . 
aux(reading, am)
~~~

~~~ sdparse
The following criteria are considered .
aux:pass(considered, are)
~~~

~~~ sdparse
Книга была прочитанно . 
aux:pass(прочитанно, была)
~~~

~~~ sdparse
El consumo de carne humano es considerado aceptable . \n The consumption of flesh human is considered acceptable .
aux:pass(considerado, es)
~~~

~~~ sdparse
Det är skrivet till mig själv . \n It is written to my self .
aux:pass(skrivet, är)
~~~

#### Other types 

When you have a clause introduced by a relative adverb in the current English treebank the copula is the head.

~~~ sdparse
This period in Athens , between 335 and 400 , is when Aristotle is believed to have lived .
mark(when, believed)
advcl(is-11, believed)
aux(believed, is-14)
~~~

But there is no reason this could not be done with content word head:

~~~ sdparse 
This period in Athens , between 335 and 400 , is when Aristotle is believed to have lived .
det(period, This)
case(Athens, in)
nmod(period, Athens)
appos(period, 335)
conj(335, 400)
cc(335, and)
case(335, between)
nsubj:cop(period, believed)
cop(believed, is-11)
aux(believed, is-14)
nsubj(believed, Aristotle)
aux(lived, have)
mark(lived, to)
xcomp(believed, lived)
~~~

#### Imperatives 

~~~ 
Be quiet ! 
cop(quiet, Be)
punct(quiet, !)
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
