---
layout: relation
title:  'nsubj'
shortdef : 'nominal subject'
udver: '2'
---

The subject is a logical agent indicating the actor or being that performs an action or experiences a state. The subject can be marked with the following labels: csubj, csubj:pass, nsubj, nsubj:pass and is always governed by the predicate. The subject can be a noun, a pronoun, or, in the case of ellipsis, even an adjective or another part of speech.

A nominal subject (nsubj) is a nominal which is the syntactic subject and the proto-agent of a clause. This nominal may be headed by a noun, or it may be a pronoun or, in ellipsis contexts, other things such as an adjective.

nsubj (nominal subject) – a nominal subject (the proto-agent), that is, a noun or pronominal phrase (composed of one or more words) which serves as the syntactic subject of a clause. The governor of the nsubj relation is typically a verb. Nsubj may be a common noun, a proper noun, a personal pronoun, an indefinite pronoun viskas (“everything”), etc

~~~ sdparse
Vaikas eina namo . \n A-child goes home .
nsubj(eina, Vaikas)
nsubj(goes, A-child)
~~~

~~~ sdparse
Jis eina namo . \n He goes home.
nsubj(eina, Jis)
nsubj(goes, He)
~~~

~~~ sdparse
Jis pamatys laive esančius žmones . \n He will-see the people on-the-ship .
nsubj(pamatys, Jis)
nsubj(will-see, He)
~~~

~~~ sdparse
Geroje žemėje auga viskas . \n In-good soil, everything grows .
nsubj(auga, viskas)
nsubj(grows, everything)
~~~

The nominal subject can be an interrogative or relative pronoun in relative clauses.

~~~ sdparse
Sutikau draugę, kuri neseniai atvyko į Lietuvą . \n I me a-friend who recently arrived in Lithuiania .
nsubj(atvyko, kuri)
nsubj(arrived, who)
~~~

Constructions like daugiau nei... (more than...); vienas... (one), involving the genitive case of a superlative degree of an adjective, when they function as the subject of the sentence, are annotated as nsubj.

~~~ sdparse
Seminare dalyvavo daugiau nei 100 dalyvių . \n The-seminar was-attended by-more than 100 participants .
nsubj(dalyvavo, daugiau)
nsubj(was-attended, by-more)
~~~

~~~ sdparse
Vienas gražiausių namų stovi Kaune . \n One of-the-most-beautiful houses stands in-Kaunas .
nsubj(stovi, Vienas)
nsubj(stands, One)
~~~

More rarely, the governor of nsubj is not a verb, but other parts of speech. For example, the root of the sentence can be an adjective or a noun.

~~~ sdparse
Automobilis yra raudonas . \n A-car is red .
nsubj(raudonas, Automobilis)
nsubj(red, A-car)
~~~

~~~ sdparse
Jonas yra studentas . \n Jonas is a-student .
nsubj(studentas, Jonas)
nsubj(a-student, Jonas)
~~~

If the subject is governed by a participle of necessity, it is marked as nsubj

~~~ sdparse
Taisyklės rekomenduotinos visiems darbuotojams . \n The-rules are-recommended for-all employees .
nsubj(rekomenduotinos, Taisyklės)
nsubj(are-recommended, The-rules)
~~~

In Lithuanian, the dependent can also be expressed by the nominal in the Genitive case, including contexts under negation or quantifier constructions.

~~~ sdparse
Vakare atėjo svečių . \n Some-guests came in-the-evening .
nsubj(atėjo, svečių)
nsubj(came, Some-guests)
~~~

~~~ sdparse
Nėra vandens . \n There-is-no water .
nsubj(Nėra, vandens)
nsubj(There-is-no, water)
~~~
