---
layout: entry
title: 'nmod'
shortdef: 'nominal modifier'
---

The `nmod` relation is used for nominal modifiers. They depend either
on another noun (group “noun dependents”) or on a predicate (group
“non-core dependents of clausal predicates”).

`nmod` is a [noun](u-pos/NOUN) (or noun phrase) functioning as a
non-core (oblique) argument or adjunct.
This means that it functionally corresponds to an adverbial when it attaches to a verb, adjective or other adverb.
But when attaching to a noun, it corresponds to an attribute, or genitive complement (the terms are less standardized here).

The `nmod` relation can be further specified by the case. 
In conjunction with the [case]() relation, it provides a uniform
analysis for:

- the possessive alternation:

~~~ sdparse
the Chair 's office
det(Chair-2, the-1)
nmod(office-4, Chair-2)
case(Chair-2, 's-3)
~~~

~~~ sdparse
the office of the Chair
det(office-2, the-1)
nmod(office-2, Chair-5)
case(Chair-5, of-3)
det(Chair-5, the-4)
~~~


- variant forms with case, a preposition or a postposition, as in Finnish for example:

~~~ sdparse
etsiä ilman johtolankaa \n to_search without clue.PARTITIVE
nmod(etsiä, johtolankaa)
case(johtolankaa, ilman)
~~~

~~~ sdparse
etsiä taskulampun kanssa \n to_search torch.GENITIVE with
nmod(etsiä, taskulampun)
case(taskulampun, kanssa)
~~~

~~~ sdparse
etsiä johtolangatta \n to_search clue.ABESSIVE
nmod(etsiä, johtolangatta)
~~~

- the dative alternation where the prepositional construction gets a similar analysis to the double object construction:

~~~ sdparse
give the children the toys
dobj(give, toys)
iobj(give, children)
~~~

~~~ sdparse
give the toys to the children
dobj(give, toys)
nmod(give, children)
case(children, to)
~~~

~~~ conllu
# give the toys to the children
1     donner    donner   VERB   _   VerbForm=Inf               0   root   _   give
2     les       le       DET    _   Definite=Def|Number=Plur   3   det    _   the
3     jouets    jouet    NOUN   _   Gender=Masc|Number=Plur    1   dobj   _   toys
4-5   aux       _        _      _   _                          _   _      _   _
4     à         à        ADP    _   _                          6   case   _   to
5     les       le       DET    _   Definite=Def|Number=Plur   6   det    _   the
6     enfants   enfant   NOUN   _   Gender=Masc|Number=Plur    1   nmod   _   children
~~~

`nmod` is also used for temporal nominal modifiers:

~~~ sdparse
Last night , I swam in the pool
nmod(swam, night)
~~~

