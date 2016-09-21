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
Reflexive pronouns have their own lemma (one lemma for both clitic and non-clitic forms).
Since they lack the nominative form, the lemma should be the clitic accusative form, which is arguably the most frequent one.

List of nominative forms of personal pronouns in various languages:

* [cs] _já, ty, on, ona, ono, my, vy, oni, ony, ona, se_
* [sk] _ja, ty, on, ona, ono, my, vy, oni, ony, sa_
* [hsb] _ja, ty, wón, wona, wono/wone, mój, wój, wonaj, wonej, my, wy, woni, wone, so_
* [pl] _ja, ty, on, ona, ono, my, wy, oni, one, się_
* [ru] _я, ты, он, она, оно, мы, вы, они, ся_
* [sl] _jaz, ti, on, ona, ono, midva, vidva, onadva, mi, vi, oni, one, ona, se_
* [hr] _ja, ti, on, ona, ono, mi, vi, oni, one, ona, se_
* [bg] _аз, ти, той, тя, то, ние, вие, те, се_
* [cu] _азъ, тꙑ, мꙑ, вꙑ, и, сѧ_

## References

* Roland Sussex, Paul Cubberley. 2006. _The Slavic Languages._ Cambridge: Cambridge University Press.
