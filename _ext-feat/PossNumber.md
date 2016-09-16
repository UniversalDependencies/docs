---
layout: feature
title: 'PossNumber'
shortdef: 'possessor’s number'
---

Possessives
may have two different numbers: that of the possessed object (number
agreement with modified noun) and that of the possessor. The
PossNumber feature captures the possessor's number. For simplicity,
the set of possible values is identical to Number, although only a
subset has been observed in corpora so far.

### Sing: singular possessor

Examples:
[en]
<span style='color: red'><I>my,
his</I></span><span style='color: red'><I>,
her, its</I></span>;
[cs]
<span style='color: red'><I>můj</I></span><I>
pes</I>
(my
dog; PossNumber=Sing|Number=Sing); <span style='color: red'><I>mí</I></span><I>
psi</I>
(my
dogs; PossNumber=Sing|Number=Plur).

### Plur: plural possessor

Examples:
[en]
<span style='color: red'><I>our,
t</I></span><span style='color: red'><I>heir</I></span>;
[cs]
<span style='color: red'><I>náš</I></span><I>
pes</I>
(our
dog; PossNumber=Plur|Number=Sing); <span style='color: red'><I>naši</I></span><I>
psi</I>
(our
dogs; PossNumber=Plur|Number=Plur).
