---
layout: feature
title: 'PossGender'
shortdef: 'possessor’s gender'
---

Possessive
adjectives and pronouns may have two different genders: that of the
possessed object (gender agreement with modified noun) and that of
the possessor (lexical feature, inherent gender). The PossGender
feature captures the possessor's gender. For simplicity, the set of
possible values is identical to Gender, although only a subset has
been observed in corpora so far.

In
the Czech examples below, the masculine PossGender implies using one
of the suffixes <I>-</I><I>ův, -ova, -ovo,</I>
and the feminine PossGender implies using one of <I>-</I><I>in,
-ina, -ino</I>.

### Masc: masculine possessor

Examples:
[cs]
<span style='color: red'><I>otcův
syn</I></span>
(father's
son; PossGender=Masc|Gender=Masc);
<span style='color: red'><I>otcova
dcera</I></span>
(father's
daughter; PossGender=Masc|Gender=Fem);
<span style='color: red'><I>otcovo
dítě</I></span>
(father's
child; PossGender=Masc|Gender=Neut).

### Fem: feminine possessor

Examples:
[cs]
<span style='color: red'><I>m</I></span><span style='color: red'><I>atčin
syn</I></span>
(mother's
son; PossGender=Fem|Gender=Masc);
<span style='color: red'><I>matčina
dcera</I></span>
(mother's
daughter; PossGender=Fem|Gender=Fem);
<span style='color: red'><I>matčino
dítě</I></span>
(mother's
child; PossGender=Fem|Gender=Neut).
