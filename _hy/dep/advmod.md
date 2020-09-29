---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
udver: '2'
---

An adverbial modifier of a word is a (non-clausal) [adverb](ADV)
or adverbial phrase that serves to modify predicate or a modifier word.

Note that in the Armenian grammatical tradition, the term _adverbial modifier_ covers
constituents that function like adverbs regardless whether they are realized
by adverbs, adpositional phrases, or nouns in particular morphological 
[cases](Case). We differentiate adverbials realized as adverbs (`advmod`) and adverbials realized by noun phrases or adpositional phrases ([obl]()). 

~~~ sdparse
գենետիկորեն մոդիֆիկացված սնունդ \n genetically modified food
advmod(մոդիֆիկացված, գենետիկորեն)
advmod(modified, genetically)
~~~

~~~ sdparse
քիչ հաճախ \n less often
advmod(հաճախ, քիչ)
advmod(often, less)
~~~

~~~ sdparse
Ուր/ADV[PronType=Int] ՞/PUNCT ես/AUX ուզում/VERB գնալ/VERB արձակուրդներին/NOUN ։/PUNCT \n Where do-you want to-go during-the-holidays ?
advmod(ուզում, Ուր)
obl(գնալ, արձակուրդներին)
advmod(want, Where)
obl(to-go, during-the-holidays)
xcomp(ուզում, գնալ)
xcomp(want, to-go)
~~~

~~~ sdparse
Մոտ/ADV հարյուր/NUM մարդ/NOUN եկավ/VERB խնջույքի/NOUN ։ \n About 100 people came to-the-party .
advmod(հարյուր, Մոտ)
advmod(100, About)
nummod(մարդ, հարյուր)
nummod(people, 100)
nsubj(եկավ, մարդ)
nsubj(came, people)
obl(եկավ, խնջույքի)
obl(came, to-the-party)
~~~

We use a special label, [advmod:emph]() for adverbial modifiers that are used for emphasis.

<!-- Interlanguage links updated Út zář 29 20:31:41 CEST 2020 -->
