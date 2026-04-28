---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

An open clausal complement (`xcomp`) of a verb or an adjective is a predicative or clausal complement without its own subject. The reference of the subject is necessarily
determined by an argument external to the `xcomp` (normally by the subject of the next higher clause). This is often referred to as *obligatory control*. 
These complements are always non-finite, and they are complements (arguments of the higher verb or adjective) rather than adjuncts/modifiers, such as a purpose clause.
The name `xcomp` is borrowed from Lexical-Functional Grammar.

~~~ sdparse
Քրիստոսի դատաստանին աւրինակովն պարտի թագաւորն զիր իրաւունքն տանել ըղորդ ։ \n After the example of Christ's judgment, the king ought to carry out his justice uprightly .
xcomp(պարտի, տանել)
xcomp(ought, to-carry)
~~~

Note that the above condition “without its own subject” does not mean that a clause is an `xcomp` just because its subject is not _overt._
The subject must be necessarily inherited from a fixed position in the higher clause. That is, there should be no available interpretation where the subject of
the lower clause may be distinct from the specified role of the upper clause. In cases where the missing subject may or must be distinct from a fixed role in the
higher clause, [ccomp]() should be used instead. This includes cases of arbitrary subjects and anaphoric control.

### Secondary Predicates

The `xcomp` relation is also used in constructions that are known as _secondary predicates_ or _predicatives_.
Remember that `xcomp` is used for core arguments of clausal predicates so it will not be used for other instances of secondary predication.
<!-- Interlanguage links updated St 12. listopadu 2025, 09:22:42 CET -->
