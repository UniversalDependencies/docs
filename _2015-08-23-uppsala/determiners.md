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

The current borderline between [u-pos/PRON]() and [u-pos/DET]() in UD is defined functionally.
It means that context matters: we classify these words according to how they are used rather
than what they are. One reason is that we cannot easily tell “what the words are”. The
existing taggers and tagsets are not going to help us because they do not distinguish
determiners. On the other hand, this functional approach contrasts with what we do elsewhere
in UD. For instance, we say that prepositions remain tagged [u-pos/ADP]() even if they are
used as verbal particles (cf. English _come on_), which is a usage quite different from the
prototypical function of prepositions.

The basic idea here is that pronouns share properties with nouns, and analogically,
determiners share properties with adjectives.