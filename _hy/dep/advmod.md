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
advmod(գնալ, Ուր)
obl(գնալ, արձակուրդներին)
advmod(to-go, Where)
obl(to-go, during-the-holidays)
~~~

~~~ sdparse
Մոտ/ADV հարյուր/NUM մարդ/NOUN եկավ/VERB խնջույքի/NOUN ։ \n About 100 people came to-the-party .
advmod(հարյուր, Մոտ)
advmod(100, About)
~~~

Note, that we treat a closed set of postpositions (traditionally known as “improper adpositions”) as localizers (see [ADP]() for a list of localizers.) The head of the localizer is the noun or the main verb of the clause preceding it. When it follows a noun, it receives the [case:loc]() relation label. Although a few localizers have further grammaticalized into adverbials denoting spatial concepts. Localizers with the adverbial function are still tagged as `ADP`, but are labeled with additional features and with the dependency relation `advmod`.

~~~ sdparse
Մոտովս/ADP[AdpType=Post|Case=Ins|Number[psor]=Sing|Person[psor]=1] անցան/VERB[Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid] երկու/NUM[NumForm=Word|NumType=Card] սիլուետներ/NOUN[Animacy=Inan|Case=Nom|Definite=Ind|Number=Plur] ։/PUNCT \n Two silhouettes passed by-me .
nsubj(անցան, սիլուետներ)
advmod(անցան, Մոտովս)
nummod(սիլուետներ, երկու)
punct(անցան, ։)
nsubj(passed, silhouettes)
advmod(passed, by-me)
nummod(silhouettes, Two)
punct(passed, .)
~~~

We use a special label, [advmod:emph]() for adverbial modifiers that are used for emphasis.
