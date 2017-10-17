---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---

The `obl` relation is used for a nominal (noun, pronoun, noun phrase) functioning as a non-core (oblique) argument or 
adjunct. This means that it functionally corresponds to an adverbial attaching to a verb, adjective or other adverb.

The `obl` relation can be further specified by the case. In conjunction with the [case]() relation, it provides a uniform
analysis for:

- variant forms with case, a preposition or a postposition, as in Finnish for example:

~~~ sdparse
etsiä ilman johtolankaa \n to_search without clue.PARTITIVE
obl(etsiä, johtolankaa)
case(johtolankaa, ilman)
~~~

~~~ sdparse
etsiä taskulampun kanssa \n to_search torch.GENITIVE with
obl(etsiä, taskulampun)
case(taskulampun, kanssa)
~~~

~~~ sdparse
etsiä johtolangatta \n to_search clue.ABESSIVE
obl(etsiä, johtolangatta)
~~~

- the dative alternation where the prepositional construction gets a similar analysis to the double object construction:

~~~ sdparse
give the children the toys
obj(give, toys)
iobj(give, children)
~~~

~~~ sdparse
give the toys to the children
obj(give, toys)
obl(give, children)
case(children, to)
~~~

~~~ conllu
# give the toys to the children
1     donner    donner   VERB   _   VerbForm=Inf               0   root   _   give
2     les       le       DET    _   Definite=Def|Number=Plur   3   det    _   the
3     jouets    jouet    NOUN   _   Gender=Masc|Number=Plur    1   obj   _   toys
4-5   aux       _        _      _   _                          _   _      _   _
4     à         à        ADP    _   _                          6   case   _   to
5     les       le       DET    _   Definite=Def|Number=Plur   6   det    _   the
6     enfants   enfant   NOUN   _   Gender=Masc|Number=Plur    1   obl   _   children
~~~

`obl` is also used for temporal and locational nominal modifiers:

~~~ sdparse
Last night , I swam in the pool
obl(swam, night)
obl(swam, pool)
~~~

and for the agent of a passive verb (with the optional subtype obl:agent):

~~~ sdparse
the cat was chased by the dog
nsubj:pass(chased, cat)
obl:agent(chased, dog)
~~~
