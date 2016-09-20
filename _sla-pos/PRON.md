---
layout: postag
title: 'PRON'
shortdef: 'pronoun'
---

Traditional grammars of Slavic languages do not distinguish pronouns from pro-adjectives (determiners, [sla-pos/DET]()),
hence it is important to define a consistent borderline here. (Some authors, e.g. Sussex and Cubberley (2006) do use
the term _determiner_ in Slavic languages but they rely on common understanding without precisely delimiting them.)

## Personal pronouns

Non-possessive personal pronouns are tagged `PRON`.
Third-person pronouns are formed as inflections on one stem and should have one lemma, the masculine singular nominative form.
(In fact there are two stems: one for the nominative and the other for the remaining cases. But the point is that the stems
do not change with gender or number.)
The first and second person pronouns are formed from different stems in singular and plural. However, to be consistent,
the singular nominative form should be used as lemma for both (all) numbers in the given person. Thus in [cs], the lemma
of _my_ is _já_ and the lemma of _vy_ is _ty._

List of nominative forms of personal pronouns in various languages:

* [cs] _já, ty, on, ona, ono, my, vy, oni, ony, ona_
* [sk] _já, ty, on, ona, ono, my, vy, oni, ony_
* [pl] _ja, ty, on, ona, ono, my, wy, oni, one_
* [ru] _я, ты, он, она, оно, мы, вы, они_
* [sl] _jaz, ti, on, ona, ono, midva, vidva, onadva, mi, vi, oni, one, ona_
* [hr] _ja, ti, on, ona, ono, mi, vi, oni, one, ona_
* [bg] _аз, ти, той, тя, то, ние, вие, те_
* [cu] _азъ, тꙑ, мꙑ, вꙑ, и_

## References

* Roland Sussex, Paul Cubberley. 2006. _The Slavic Languages._ Cambridge: Cambridge University Press.
