---
layout: base
title: 'Reflex'
shortdef: 'reflexive'
---

## {{ page.title }}: {{ page.shortdef }}

Boolean feature. Is this pronoun or verb reflexive? Many tagsets would
have this as another value of "prontype". As far as pronouns are
concerned, we could probably live with it since we made "poss" a
separate feature and I only know about two different reflexive
classes: personal and possessive. On the other hand, verbs can be also
tagged as reflexive and then I would turn the feature on for
them. (But the examples I know about are in fact fused verbs with
reflexive pronouns, as in Spanish "despertarse" or Russian
"проснуться" = "wake up". We will need a general approach to fused
words of different parts of speech but I don't think we've got any at
the moment, do we?)

### Yes: it is reflexive

Note that there is no "no" value. If the word is not possessive, the
feature will just not be mentioned in the FEAT column. (Which means
that empty value has the "no" meaning.) 

Examples: [cs] se, si, svůj
