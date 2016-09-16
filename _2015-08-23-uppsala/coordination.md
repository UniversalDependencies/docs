---
layout: base
title:  'Uppsala Group on Coordination and Names'
---

# Uppsala Group on Coordination and Names

## Coordination

The universal guidelines specify that the first conjunct is the head in a coordinated phrase. It has been suggested that some languages show inflection patterns indicating that the last conjunct is instead the head. We considered a number of examples but concluded that they could all be analyzed as cases where the inflection applies to the entire coordinated phrase but shows up only on one of the conjuncts. Hence, we don't find any reason to change the guidelines.

### Conjunct-sensitive agreement

One type of example is conjunct-sensitive agreement, that is, where the verb of a coordinated subject agrees with only one of the conjuncts. This happens in Latin as well as in Slavic languagues. As far as we could tell, however, the crucial factor here is proximity, meaning that the verb agrees with the first conjunct if it precedes the subject but with the last conjunct if it succeeds the subject. This is illustrated by the following contrasting examples from Serbo-Croatian:

~~~ sdparse
Juce su uništena sva sela i sve varošice . \n yesterday are destroyed-PL.N all villages-N and all towns-F .
conj(sela, varošice)
nsubj(uništena, sela)
~~~

~~~ sdparse
Sva sela i sve varošice su uništene . \n all villages-N and all towns-F are destroyed-PL.F .
conj(sela, varošice)
nsubj(uništene, sela)
~~~

We conclude that the conjunct-sensitive agreement patterns do not provide clear evidence of headedness in coordination.

### Delayed suffixation

Another type of example is found in Turkish, where inflectional suffixes may show up only on the final conjunct, as in this example.

~~~ sdparse
Süt  içer , diş fırcalar , bir hikaye dinler ve uyurDUK . \n milk drink-AOR , teeth brush-AOR , a   story  listen-AOR and sleep-AOR-PAST-2PL .
conj(içer, fırcalar)
conj(içer, dinler)
conj(içer, uyurDUK)
~~~

The fact that PAST and 2PL are only marked overtly on the final coordinated verb might be taken as an indication that the final conjunct is the head. However, we think it is also possible to analyze it as an inflection that applies to the entire coordination but is visible only on the last conjunct. In this respect, it is similar to constructions like "Tom and Jerry's Diner", where the clitic/suffix "'s" has scope over the entire coordination. 

## Names

The universal guidelines specify that multiword names without regular syntactic structure should be annotated as head-initial structures with the name relation. Again it has been suggested that some languages show inflection patterns indicating that the last word is the head and again we concluded that these can be analyzed as cases where the inflection applies to the entire name but shows up only on the last element. Hence, we don't find any reason to change the guidelines here either.

A typical example is the genitive inflection in Swedish, which goes on the last name regardless of whether it is the last name or the first name.

~~~ sdparse
Fia Janssons bröder \n Fia Jansson's brothers
name(Fia, Janssons)
nmod:poss(Fia, bröder)
~~~

~~~ sdparse
Fias bröder \n Fia's brothers
nmod:poss(Fias, bröder)
~~~ 
