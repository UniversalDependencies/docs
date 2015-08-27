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

Example of ellipsis in [cs]:

* _<b>Který</b> dort chceš?_ “<b>Which</b> cake do you want?” … _který_ is `DET`
* _<b>Který</b> chceš?_ “<b>Which</b> [one] do you want?” … `DET`, or `PRON`?

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

## Interaction between POS tags and dependency relations

The current UD guidelines almost imply that the [u-pos/DET]() POS tag and the [u-dep/det]()
relation label occur at the same places. Functional multi-word expressions are an exception.
A determiner inside of a MWE will be attached to the previous token with the label
[u-dep/mwe](). If it happens to be the first token of the MWE, and the whole MWE behaves like
something else than a determiner, then it will also have a different label.

This gives us a good device to search for irregularities.
Even when we ignore MWEs, there are a number of points in the data where the `DET <=> det`
constraint is currently violated.

### When `det` does not imply `DET`

* Undecided/undecidable borderline between `DET` and `PRON`. The word is tagged `DET` but
  attached as a pronoun (`nsubj`, `dobj`, `iobj`, `nmod`). An interesting example from the
  English data is that _you_ is tagged `PRON` but attached as `det` in _you guys_.
  (But one could also argue that the whole thing is a MWE, in which _guys_ acts as a new
  plural suffix.)
* Fuzzy border between `DET` and `ADJ`.
  [sv] _annan_ “another”, _viss_ “certain, some”, _många_ “many”, _egen_ “own”,
  _hel_ “whole” are `ADJ` + `det`.
* Multi-word determiners: [fr] _beaucoup de, moins de._
* Bad [u-pos/PROPN]() tag in multi-word named entities. In examples like [es] _<b>La</b>
  Rioja,_ [fr] _<b>La</b> Crochais_ the determiner is part of a named entity but it still
  should be tagged `DET`, not `PROPN`.
* Other annotation or conversion errors.

There are no occurrences in bg, cs, da, fi-ftb. The other languages:

PML-TQ (<a href="http://lindat.mff.cuni.cz/services/pmltq/#!/treebanks">http://lindat.mff.cuni.cz/services/pmltq/#!/treebanks</a>) was used to collect examples:

<pre>a-node $d := [deprel="det", tag!="DET"] >> for $d.tag give $1, count() sort by $2 desc, $1</pre>

* Basque: numerals (even definite ones) are attached as `det`. Why not [u-dep/nummod]()?
  372 cases. Then 42 ADJ, 27 NOUN, 14 ADV, 3 PRON, 1 PART, 1 VERB.
* Croatian: 631 PRON, 105 ADJ (83: sav = svůj = oneself’s), 101 ADV, 6 ADP, 6 AUX, 4 PART, 3 CONJ, 2 NOUN, 1 NUM.
* English: rare, but it exists: 14 PRON, 3 ADJ, 3 ADV, 2 NUM, 1 ADP.
* Finnish (Turku): 3128 PRON, 23 ADV, 5 ADJ, 5 NOUN, 1 SCONJ (?) Documentation diff: the current conversion of TDT does not use the DET tag.
* French: MWE beaucoup de, moins de; articles in multi-word named entities (La Crochais) are tagged PROPN! 226 PROPN, 105 ADP, 58 ADV, 11 X, 6 NOUN, 3 ADJ, 2 VERB, 1 PRON.
* German: 5063 NOUN, 2562 PRON, 2306 PROPN, 15 ADJ, 1 ADP, 1 ADV, 1 NUM, 1 VERB. Conversion errors. Noun example: schnelle Behebung der/det Probleme/det.
* Greek: 9463 ADJ, 356 PRON, 2 NUM. The Greek definite article is tagged as ADJ instead of DET (but documentation does not suggest that it is intentional).
* Hebrew: 520 ADV, 163 ADP, 115 PRON, 94 NUM, 33 CONJ, 6 ADJ, 2 NOUN, 2 X, 1 SCONJ.
* Hungarian: just 1 PRON :-)
* Indonesian: 332 PROPN, 252 PRON, 179 NOUN, 64 NUM, 14 PART, 3 ADV, 2 VERB, 1 ADJ, 1 PUNCT.
* Irish: 54 PRON, 25 X, 1 NOUN, 1 NUM, 1 PROPN. Sometimes pronoun under preposition: _leis siúd, leis sin, air sin_ … are these errors?
* Italian: just 1 NUM, 1 PRON :-)
* Persian: 216 PRON, 212 ADV, 107 NOUN, 26 INTJ, 4 ADJ, 1 NUM.
* Spanish: 717 PROPN, 24 PRON, 20 X, 10 ADJ, 4 ADP, 3 SYM, 1 ADV, 1 CONJ, 1 PART, 1 VERB. Same problem with PROPN as in French.
* Swedish: 1345 ADJ, 594 NOUN, 44 ADV, 29 PRON, 3 PROPN, 2 ADP, 1 CONJ, 1 VERB.

### When `DET` does not imply `det`

* Quite a few cases actually do not count as an error because the dependency relation is a
  subtype of `det`: `det:nummod`, `det:numgov`, `det:predet`, `det:def`, `det:poss`.
* Several languages analyze the relation between possessive determiners and the possessed
  noun as `nmod:poss`, reportedly to make it parallel with other possessives (this
  explanation appeared even in the universal guidelines, though several months after we
  froze the guidelines). Maybe it is inherited from English where speakers do not feel such
  a strong difference between genitive of a noun, and a possessive (adjective).
  But much more than English this is visible in French, Spanish, Irish, Swedish and also
  German, where it is quite obvious that possessive determiners (pronouns) are like
  adjectives and should not be parallel to `nmod`.
* Negative determiners such as _no_ in _no legal grounds_ should be distinguished from the
  verb-negating particles (English _not_). The [u-dep/neg]() relation should be used for the
  latter while the former should be `det`. But this is violated in English and French
  (surprisingly not in Spanish, although otherwise these two datasets often share the same
  decisions).
* Annotation or conversion errors.

PML-TQ (<a href="http://lindat.mff.cuni.cz/services/pmltq/#!/treebanks">http://lindat.mff.cuni.cz/services/pmltq/#!/treebanks</a>) was used to collect examples:

<pre>a-node $d := [tag="DET", deprel!="det"] >> for $d.tag give $1, count() sort by $2 desc, $1</pre>

There are no occurrences in: hr, da, fi, fi-ftb, el.

* Basque: 391 nmod, 297 nsubj, 186 dobj …
* Bulgarian:  88 nsubj, 23 nmod, 16 iobj, 8 dobj … Lemmas: 52 _този,_ 34 _какъв,_ 21 _всеки,_ 14 _някой_
* Czech: 979 det:numgov, 552 det:nummod, 24 advcl, 13 amod …
* English: 1332 nsubj, 481 dobj, 355 nmod, 316 neg, 204 det:predet, 146 nsubjpass, … neg: _no legal grounds_ … is this intentional? nsubj: , which means … (which is `DET` and `nsubj`)
* French: 4347 nmod:poss, 209 dep, 143 expl, 138 mwe, 107 neg, …
German: 1915 nmod:poss, 28 nsubj, 13 dep, 12 nmod, … _Der Alltag, der/nsubj nach dem Parteitag kommt._
* Hebrew: 16346 det:def, 144 dep, 39 advmod, 36 mwe, … (even the advmod is actually a MWE but it is not apparent here because it is the first node of the MWE)
* Hungarian: 13 remnant, 10 nmod, 6 dobj, … Are the remnant cases errors in annotation of coordination? I think they are.
* Indonesian: 211 mwe, 47 nummod, 39 nsubj, …
* Irish: 229 nmod:poss, 2 ccomp, 2 conj, 1 compound, 1 nsubj
* Italian: 1600 det:poss, 331 det:predet, 131 nsubj, 41 dobj, 18 nmod, …
* Persian: 36 det:predet, 18 mark, 15 nsubj, …
* Spanish: 4353 nmod:poss, 83 advmod, 23 mwe, … (no neg, unlike French)
* Swedish: possessive DET are attached as nmod:poss. 675 nmod:poss, 43 mwe, 18 nmod, 16 nsubj ...

## Miscellaneous

We are discussing how different languages encode “determination”.

More than one determiner per NP? There are currently no restrictions but grammars of some
languages assume at most one determiner per noun phrase. This is probably why we have
`det:predet` in English and Italian, to mark that the additional determiner is exceptional.

Pronouns, determiners and pronominal adverbs should always have a non-empty value of the
feature [u-feat/PronType](). In particular, articles should be tagged `PronType=Art`.

## The big table

We thought it would be useful to get a broad picture of pronominal words in various languages,
how they behave and how they are usually classified in grammars of those languages.
It is a space of several dimensions and it is not clear what would be the best way of
visualizing it but let's start with a table and see what we get.

Legend: __TPOS__ = traditional part of speech, i.e. what category it belongs to in the
grammatical tradition used in this language. __OPOS__ = original POS tag (in a native tagset
where we may to convert from; this is likely, but not necessary, to be same as TPOS.
__Similar__ = what non-pronominal part of speech (if any) does this word resemble?
For a concrete example, if the language has genders and the word takes different forms for
different genders in order to agree with a modified noun, it is probably like an adjective.
__Amod__ = is it possible or even likely that it modifies a noun in a similar way to how
adjectives modify nouns?

<table>
  <tr>
    <th>Lang</th>
    <th>Word</th>
    <th>Gloss</th>
    <th>TPOS</th>
    <th>OPOS</th>
    <th>Similar</th>
    <th>Amod</th>
    <th>Note</th>
  </tr>
  <tr>
    <td>cs</td>
    <td>já, ty, on, ona, ono, my, vy, oni, ony, ona, se</td>
    <td>I, you (`Sing`), he, she, it, we, you (`Plur`), they (`Masc`), they (`Fem`), they (`Neut`), oneself (`Reflex`)</td>
    <td>PRON</td>
    <td>PRON</td>
    <td>NOUN</td>
    <td>Impossible</td>
    <td>Pronouns inflect for case (7 different cases in Czech) but regardless the case,
        personal (non-possessive) pronouns are never determiners.
        Note that Czech allows that noun phrases are post-modified by genitive noun phrases,
        this construction is one of the possible means to express possession, but the genitive
        noun phrase cannot be a genitive personal pronoun. A possessive pronoun must be used
        instead.</td>
  </tr>
  <tr>
    <td>cs</td>
    <td>můj, tvůj, jeho, její, náš, váš, jejich, svůj</td>
    <td>my, your (`Sing`), his/its, her, our, your (`Plur`), their, oneself's (`Reflex`)</td>
    <td>PRON</td>
    <td>PRON</td>
    <td>ADJ</td>
    <td>Likely</td>
    <td>These are not genitive forms of personal pronouns! (They exist but they are different.)
        These are nominative forms of possessive pronouns, which behave like adjectives.
        They have different forms for different genders; one must use the form that agrees
        with the modified (possessed) noun in gender, number and case.</td>
  </tr>
  <tr>
    <td>cs</td>
    <td>ten (to), tento, tenhle, tamten, onen, takový, týž, tentýž</td>
    <td>the (it), this, this, that, that, such, same, same</td>
    <td>PRON</td>
    <td>PRON</td>
    <td>ADJ</td>
    <td>Likely</td>
    <td>Demonstratives mostly inflect for gender and modify nouns adjectively.
        Only the neuter gender of a subset of these words
        (to, toto, tohle, tamto)
        can be used alone as a true pronoun (it, this, that).</td>
  </tr>
  <tr>
    <td>cs</td>
    <td>kdo, co</td>
    <td>who, what</td>
    <td>PRON</td>
    <td>PRON</td>
    <td>NOUN</td>
    <td>Impossible</td>
    <td></td>
  </tr>
  <tr>
    <td>cs</td>
    <td>jaký, který, čí, jenž</td>
    <td>which (quality), which (selection), whose, that (`Rel`)</td>
    <td>PRON</td>
    <td>PRON</td>
    <td>ADJ</td>
    <td>Possible</td>
    <td></td>
  </tr>
  <tr>
    <td>cs</td>
    <td>někdo, něco, kdokoli, cokoli</td>
    <td>somebody, something, anybody, anything</td>
    <td>PRON</td>
    <td>PRON</td>
    <td>NOUN</td>
    <td>Impossible</td>
    <td></td>
  </tr>
  <tr>
    <td>cs</td>
    <td>nějaký, některý, něčí, jakýkoli, kterýkoli, číkoli</td>
    <td>some (quality), some (selection), someone's, any (quality), any (selection), anyone's</td>
    <td>PRON</td>
    <td>PRON</td>
    <td>ADJ</td>
    <td>Likely</td>
    <td></td>
  </tr>
  <tr>
    <td>cs</td>
    <td>každý</td>
    <td>every / each</td>
    <td>PRON</td>
    <td>PRON</td>
    <td>ADJ</td>
    <td>Likely</td>
    <td></td>
  </tr>
  <tr>
    <td>cs</td>
    <td>všechen</td>
    <td>all / everybody / everything</td>
    <td>PRON</td>
    <td>PRON</td>
    <td>ADJ</td>
    <td>Unlikely</td>
    <td>This word can be used as a determiner but most of the time it is used as a
    standalone pronoun that would be translated as “everyone, everything”.</td>
  </tr>
</table>
