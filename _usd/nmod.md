---
layout: base
title: 'nmod'
shortdef: 'nominal modifier'
---

## nmod: nominal modifier

The *nmod* relation is used for nominal modifiers. In general, *nmod* expresses some form of oblique or adjunct relation that can be further specified by the *case*.  In conjunction with the *case* relation, it provides a uniform analysis for:

- the possessive alternation:

<div class="sd-parse">
the Chair 's office
det(Chair-2, the-1)
nmod(office-4, Chair-2)
case(Chair-2, 's-3)
</div>

<div class="sd-parse">
the office of the Chair
det(office-2, the-1)
nmod(office-2, Chair-5)
case(Chair-5, of-3)
det(Chair-5, the-4)
</div>


- variant forms with case, a preposition or a postposition, as in Finnish for example:

<div class="sd-parse">
etsiä ilman johtolankaa \n to_search without clue.PARTITIVE
nmod(etsiä, johtolankaa)
case(johtolankaa, ilman)
</div>

<div class="sd-parse">
etsiä taskulampun kanssa \n to_search torch.GENITIVE with
nmod(etsiä, taskulampun)
case(taskulampun, kanssa)
</div>

<div class="sd-parse">
etsiä johtolangatta \n to_search clue.ABESSIVE
nmod(etsiä, johtolangatta)
</div>

- the dative alternation where the prepositional construction gets a similar analysis to the double object construction:

 <div class="sd-parse">
give the children the toys
dobj(give, toys)
iobj(give, children)
</div>

<div class="sd-parse">
give the toys to the children
dobj(give, toys)
nmod(give, children)
case(children, to)
</div>

<div class="sd-parse">
donner les_jouets aux enfants \n give the_toys to_the children
dobj(donner-1, les_jouets-2)
nmod(donner-1, enfants-4)
case(enfants-4, aux-3)
</div>

*nmod* is also used for temporal nominal modifiers:

<div class="sd-parse">
Last night , I swam in the pool
nmod(swam, night)
</div>

