---
layout: base
title:  'Uppsala Group on Determiners and Pronouns'
---

# Uppsala Group on Determiners and Pronouns

_(Dan Zeman, Jenna Kanerva, Mojgan Seraji, Nizar Habash, Petya Osenova, Simonetta Montemagni, Teresa Lynn)_

This topic is related to the Github issues
<a href="http://github.com/UniversalDependencies/docs/issues/159">#159</a>,
<a href="http://github.com/UniversalDependencies/docs/issues/157">#157</a>,
<a href="http://github.com/UniversalDependencies/docs/issues/154">#154</a> and
<a href="http://github.com/UniversalDependencies/docs/issues/132">#132</a>.

The issues discussed in this group are extremely complex and we could not hope for an ultimate
solution to be found within 90 minutes. We started collecting the input and we are going to go
on collecting it online. Then hopefully there will be more insight and we can find a way of
modifying the current guidelines.

## The starting point

There are languages that sort of lack the category of determiners. What we mean by that is
really just the category, not the words themselves. There are words that are very well
comparable to what is called determiners in other languages, they are just not called
determiners in the “traditional” grammar of the language. Instead, they are often called
pronouns.

In order to increase cross-lingual comparability, it is desirable to use the same labels for
these words across langauges. Consequently, we have to partially abandon the traditional
grammars and to define determiners in these languages. (Not necessarily in all languages. But
when we have words that are parallel to English or Romance determiners, we want parallel
analysis for them.)

The current borderline between [u-pos/PRON]() and [u-pos/DET]() in UD, simplified, says that
if it replaces a noun phrase, it is a pronoun; if it modifies a noun phrase, it is a
determiner. This definition dates back at least to the EAGLES multi-language annotation
project in the 1990s. The basic idea here is that pronouns share properties with nouns, and analogically,
determiners share properties with adjectives. Examples:

* _I saw <b>this</b> yesterday._ … _this_ is `PRON`
* _I saw <b>this</b> car yesterday._ … _this_ is `DET`

Thus the borderline is defined functionally.
It means that context matters: we classify these words according to how they are used rather
than what they are. One reason is that we cannot easily tell “what the words are”. The
existing taggers and tagsets are not going to help us because they do not distinguish
determiners. On the other hand, this functional approach contrasts with what we do elsewhere
in UD. For instance, we say that prepositions remain tagged [u-pos/ADP]() even if they are
used as verbal particles (cf. English _come on_), which is a usage quite different from the
prototypical function of prepositions.

There is another and perhaps more important objection to the current definition: in languages
that traditionally do distinguish determiners, our definition does not precisely match the
borderline already established by their tagsets. Conforming to the UD guidelines thus means
that in these languages many words must be fixed too.

Finally, while the definition may seem robust at the first glance, its applicability is also
limited. A pronoun might be replacing a noun phrase but modifying another noun phrase at the
same time (as a genitive post-modifier). If a word does not modify a noun, it could mean that
it is a pronoun, but it could also be a determiner whose noun head has been elided. So the
definition does not cover all possible situations and we need either more freedom, or more
elaborate guidelines.

## What are the options?

* Keep the functional definition, perhaps with a bit more freedom, such as:
  “the language-specific documentation may further specify the conditions, e.g. by saying
  that determiners do not occur as post-modifiers, that they must agree with the modified
  nominal in gender, number and case and so on. It may also describe which situations are
  analyzed as elliptical (i.e. the word is considered to be modifying an elided nominal and
  thus it is tagged `DET` even though it is attached to something else).”
* Do not decide each individual usage of the word separately. Instead, look at prevailing
  usage pattern in the corpus. This is still based on heuristics but it allows to
  pre-categorize at least some of the words.
  (But it is still possible to say that some words are homonymous and can belong to either
  class.)
* Pre-categorization can be also based on other criteria.
  In some languages, at least a subset of pronouns is clearly similar to adjectives
  morphologically. For instance, they inflect for gender to be able to agree with the gender
  of the nouns they modify. We could say that these are determiners, regardless whether they
  are actually attached to a nominal in the sentence.
  Along the same lines, there are pronouns that can never act like determiners. Personal
  pronouns will probably fall here in most languages, at least their nominative forms.
  And there will be a few more, such as _who_.
