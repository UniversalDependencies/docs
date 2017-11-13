---
layout: feature
title: 'VerbType'
shortdef: 'verb type'
---

We already split auxiliary and non-auxiliary verbs at the level of POS
tags but some tagsets mark other distinctions.

### Aux: auxiliary verb

Verb used to create periphrastic verb forms (tenses, passives etc.) In
many languages there will be ambiguity between auxiliary and other
usages, thus the same verb should get different tags or feature values
depending on context.

### Cop: copula verb

Verb used to make nominal predicates from adjectives, nouns or
participles. Some languages omit the copula or use other means to
create nominal predicates. In languages that have copula, it is often
the equivalent of the verbs "to be" or "to become".

Examples: It *is* purple. He just *became* father.

### Mod: modal verb

A group of verbs traditionally distinguished in grammars of some
languages. They take infinitive of another verb as argument (with or
without infinitive-marking conjunction, in languages that have it) and
add various modes of possibility, necessity etc. to the meaning of the
infinitive. There are other verbs that take infinitives as arguments
but they are not considered modal (e.g. phasal verbs such as "to
*begin* to do something"). The set of modal verbs for a language is
closed and can be enumerated.

Note that some languages (e.g. Turkish) use special forms of the main
verb instead of combining it with a modal verb.

German examples: dürfen (may), können (can), mögen (want/like to),
müssen (must), sollen (shall), wollen (want to), wissen (know to)

Czech examples: muset (must), mít (shall, have to), moci (can), smět
(may, be allowed to), umět (know to), chtít (want to)

### Light: light (support) verb

Light or support verb is used in verbo-nominal constructions where the main
part of the meaning is contributed by a noun complement.
An English example would be _to take a nap,_ where _take_ is the light verb.
It is often the case that the light verb can also function as a normal verb
in the language (cf. _to take two dollars_).
If the light verb constructions are used frequently in a language (e.g. Hindi or Japanese) or
if there is a dedicated light verb that cannot be used as normal verb,
it makes sense to mark light verbs with a dedicated feature value.

Japanese example: suru
