---
layout: feature
title: 'Proper'
shortdef: 'reference to a specific entity'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Yes">Yes</a></td>
</tr>
</table>

This is a binary (yes/no) lexical feature that is only annotated when its value is `Yes`.

### <a name="Yes">`Yes`</a>: common phrase used for a specific referent

A positive value of `Proper` is assigned to those otherwise common words (mostly nouns and adjectives, but also whole phrases) whose *extension* in a given context is restricted to a single, specific individual, object, place, event or entity in general, without need to be further [determined](la-pos/DET), all the while keeping their common meaning. 

In other words, `Proper=Yes` is used for common nominal phrases which can be considered proper nouns only with respect to a limited context and given some prior knowledge. Examples are nicknames, epithets by antonomasia, titles of books, and so on.

This feature is of purely "lexical" nature, as it (usually) is not reflected morphologically nor syntactically. 

A noun receiving the part-of-speech tag for proper nouns ([PROPN](la-pos/PROPN)) is implicitly considered to have a positive value of `Proper`.

#### Examples

* [...] *ut **Phylosopho** placet in hiis que **De simpliciter ente*** [...] 'as the Philosopher claims in his [books] about the simple Being' (Dante, *De Monarchia*)
    * the philosopher *par excellence* and the one intended here is Aristotle;
    * *in hiis que De simpliciter ente* literally means 'in those [i.e. books] which (are) about the simple Being', referring to a part of Aristotle's Metaphysics. All elements in the sequence *de simpliciter ente* receive `Proper=Yes` for being used as a sort of title (as the posteriorly edited upper-case *d* suggests), but they otherwise form a regular phrase, syntactically undistinguishable from others.
* [...] *Ovidius dicit in quinto **Metamorfoseos*** [...] 'Ovidius says in the fifth [book] of his *Metamorphoses*' (Dante, *De vulgari eloquentia*)
    *  *metamorphosis* 'metamorphosis' is a common noun regularly declined in the [Greek form](la-feat/Variant) of the genitive singular, and the phrase literally means 'the fifth one about/of the metamorphosis'.



