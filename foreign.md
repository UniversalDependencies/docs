---
layout: base
title:  'Foreign Expressions and Code-Switching'
udver: '2'
---

# Foreign Expressions and Code-Switching

A corpus may contain material from multiple languages. There are a few scenarios for how this is annotated,
depending on the prevalence of multiple languages in the corpus and the extent to which expressions have been
sufficiently integrated into a new language that they can be considered borrowings.

## Inherently code-switched corpora

Every UD corpus is listed under an ISO language code. Most UD corpora have a single primary language.
A few corpora, however, feature extensive code-switching between multiple (usually two) languages,
and are listed under a custom code for the code-switched language variety. For example, the Turkish-German
variety bears the `qtd` code at the corpus level.

In inherently code-switched corpora, every word must have a [`Lang`](https://universaldependencies.org/misc.html#lang) feature in the MISC column to indicate
which language it belongs to. Most often, it will be one of the languages comprising the multilingual variety
(for Turkish-German, either Turkish `Lang=tr` or German `Lang=de`). Occasionally, a word will be specific to the
multilingual variety (`Lang=qtd`). None of these are considered _foreign_ in the context of the corpus.

It is, of course, possible for an inherently code-switched corpus to contain expressions from "third party" languages.
These are annotated as cross-lingual content as described below.

## Cross-lingual content

When a corpus contains material from a language other than its declared language(s),
UD offers a few options for annotating such material, which we term _cross-lingual content_.
It may be analyzed as either _foreign_ or _borrowed_.

(Here we distinguish content—the words of a sentence in the main annotation—from metadata.
Cross-lingual and cross-orthography metadata—translations, glosses, transliterations—[may also be provided](https://universaldependencies.org/format.html#other-miscellaneous-attributes).)

For morphosyntactic annotation of an expression originating in another language, there are a few options:

### Option 1: Code-switched analysis

A treebank may opt to fully analyze the cross-lingual content as if it were in a treebank for the source language.
We call this the "code-switched analysis", by analogy to the phenomenon of code-switching, wherein a speaker with
knowledge of the morphosyntax of multiple languages intermixes them (but this option for treebanking cross-lingual
content should not be taken as a claim about individual speakers).
The language of any content analyzed in this manner should be specified on individual tokens
with the MISC feature [`Lang`](https://universaldependencies.org/misc.html#lang)`=CODE`, as described [here](https://universaldependencies.org/format.html#other-miscellaneous-attributes): this makes it clear which annotation guidelines
are being followed for the cross-lingual content so that the annotations can be properly validated.
Unless the language is inherently associated with the corpus-level language code
(see [Inherently code-switched corpora](#inherently-code-switched-corpora) above), the cross-lingual portion is considered _foreign_ material
and should be annotated with [Foreign]()`=Yes` in FEATS.

<div class="conllu-parse">
1 That   _ _ _ _ 0 _ _ _
2 would  _ _ _ _ 0 _ _ _
3 be     _ _ _ _ 0 _ _ _
4 a      a    DET  _ _ 5 det   _ _
5 coup   coup NOUN _ Foreign=Yes|Gender=Masc|Number=Sing 0 root  _ Lang=fr
6 d'     de   ADP  _ Foreign=Yes                         7 case  _ Lang=fr
7 état   état NOUN _ Foreign=Yes|Gender=Masc|Number=Sing 5 nmod  _ Lang=fr
</div>

<div class="conllu-parse">
1 Have    _ _ _ _ 0 _ _ _
2 you     _ _ _ _ 0 _ _ _
3 seen    _ _ _ _ 0 _ _ _
4 the     _ _ _ _ 0 _ _ _
5 film    _ _ _ _ 0 _ _ _
6 Le      le      NOUN _ Definite=Def|Foreign=Yes|Gender=Masc|Number=Sing|PronType=Art 7 det   _ Lang=fr
7 festin  festin  NOUN _ Foreign=Yes|Gender=Masc|Number=Sing                           5 appos _ Lang=fr
8 de      de      ADP  _ Foreign=Yes                                                   9 case  _ Lang=fr
9 Babette Babette NOUN _ Foreign=Yes|Gender=Fem|Number=Sing                            7 nmod  _ Lang=fr
</div>

Treebanks have wide latitude to decide what counts as a different language/code and whether to analyze its
structure or not. However, this strategy is generally _not_ recommended for proper names mentioned in isolation,
such as names of people or places used in the target language.

### Option 2: Borrowed analysis

Another option is to analyze the cross-lingual content as if it is part of the vocabulary
of the main language of the text. Tokenization principles of the main language,
not the donor language, would be expected to apply. Borrowed words are _not_ marked
with [Foreign]()`=Yes` because they are taken to be incorporated into the target language.
However, the donor language may be made explicit with the [`OrigLang`](https://universaldependencies.org/misc.html#origlang) feature in MISC.

For multiword expressions, the UPOS and morphological features of the expression as a whole
are copied to all the individual words, which are connected to the first word in a [flat]() structure.
(For names, the subtyped relation [flat:name]() may optionally be used.)

Nominals—including concept terms and names of persons and locations—are frequently borrowed
and would typically be analyzed in this way. Other vocabulary may be considered borrowed as well.

~~~ sdparse
Yeah , I think that would be kosher/ADJ .
~~~

~~~ sdparse
That would be a/DET coup/NOUN d'état/NOUN .
det(coup, a)
flat(coup, d'état)
~~~

<div class="conllu-parse">
1 We      _ _ _ _ 0 _ _ _
2 saw     _ _ _ _ 0 _ _ _
3 it      _ _ _ _ 0 _ _ _
4 on      _ _ _ _ 5 case _ _
5 Al      Number=Sing PROPN _ _ 0 _ _ OrigLang=ar
6 Jazeera Number=Sing PROPN _ _ 5 flat _ OrigLang=ar
</div>

If a word from another language has target-language inflectional morphology, this should be treated
as borrowed so the morphology can be properly encoded in features. Take this Czech example:

<div class="conllu-parse">
# text = Jeďte po dálnici až k exitu 36.
# text_en = Follow the highway until exit 36.
1 Jeďte   jet     VERB  _ _ 0 root        _ Gloss=go
2 po      po      ADP   _ _ 3 case        _ Gloss=along
3 dálnici dálnice NOUN  _ _ 1 obl         _ Gloss=highway
4 až      až      PART  _ _ 6 advmod:emph _ Gloss=until
5 k       k       ADP   _ _ 6 case        _ Gloss=to
6 exitu   exit    NOUN  _ Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos 1 obl _ OrigLang=en|Gloss=exit
7 36      36      NUM   _ _ 6 nmod        _ Gloss=36|SpaceAfter=No
8 .       .       PUNCT _ _ 1 punct       _ Gloss=.

</div>

The form _exitu_ does not exist in English and must therefore receive Czech morphological features.
A borrowed expression may also bear target-language modifiers, for example.

### Option 3: Foreign analysis

The third option is to treat the cross-lingual content as wholly unanalyzable foreign material.
Words should receive the feature [Foreign]()`=Yes` in FEATS and be tagged as [X]().
Sequences of multiple foreign words are joined together by [flat]() (optionally subtyped as [flat:foreign]()).
In contrast to [Option 2](#option-2-borrowed-analysis), this is best suited to phrasal idioms, quoted utterances, and metalinguistic mentions.
The foreign language, if known, is best made explicit with the [`OrigLang`](https://universaldependencies.org/misc.html#origlang) feature in MISC.

<div class="conllu-parse">
1 Well    _ _ _ _ 0 _ _ _
2 ,       _ _ _ _ 0 _ _ _
3 c'est   c'est  X _ Foreign=Yes 0 root    _ OrigLang=fr
4 la      la     X _ Foreign=Yes 3 flat    _ OrigLang=fr
5 vie     vie    X _ Foreign=Yes 3 flat    _ OrigLang=fr
</div>

<div class="conllu-parse">
1 Have    _ _ _ _ 0 _ _ _
2 you     _ _ _ _ 0 _ _ _
3 seen    _ _ _ _ 0 _ _ _
4 the     _ _ _ _ 0 _ _ _
5 film    _ _ _ _ 0 _ _ _
6 Le      Le      X _ Foreign=Yes 5 appos   _ OrigLang=fr
7 festin  festin  X _ Foreign=Yes 6 flat    _ OrigLang=fr
8 de      de      X _ Foreign=Yes 6 flat    _ OrigLang=fr
9 Babette Babette X _ Foreign=Yes 6 flat    _ OrigLang=fr
</div>

<div class="conllu-parse">
1  "     _ _ _ _ 0 _ _ _
2  Lehitraot     Lehitraot X _ Foreign=Yes 0 _ _ OrigLang=he
3  "     _ _ _ _ 0 _ _ _
4  means _ _ _ _ 0 _ _ _
5  "     _ _ _ _ 0 _ _ _
6  see   _ _ _ _ 0 _ _ _
7  you   _ _ _ _ 0 _ _ _
8  later _ _ _ _ 0 _ _ _
9  "     _ _ _ _ 0 _ _ _
10 in    _ _ _ _ 0 _ _ _
11 Hebrew  _ _ _ _ 0 _ _ _
</div>

<div class="conllu-parse">
1 "      _ _ _ _ 2 punct _ _
2 Dans      Dans     X _ Foreign=Yes 0 root   _ OrigLang=fr
3 cette     cette    X _ Foreign=Yes 2 flat   _ OrigLang=fr
4 classe    classe   X _ Foreign=Yes 2 flat   _ OrigLang=fr
5 ,      _ _ _ _ 2 punct _ _
6 "      _ _ _ _ 2 punct _ _
7 she    _ _ _ _ 8 nsubj _ _
8 chided _ _ _ _ 2 parataxis _ _
9 me     _ _ _ _ 8 obj _ _
10 ,     _ _ _ _ 8 punct _ _
11 "     _ _ _ _ 12 punct _ _
12 nous     nous     X _ Foreign=Yes 2 flat    _ OrigLang=fr
13 ne       ne       X _ Foreign=Yes 12 flat    _ OrigLang=fr
14 parlons  parlons  X _ Foreign=Yes 12 flat    _ OrigLang=fr
15 pas      pas      X _ Foreign=Yes 12 flat    _ OrigLang=fr
16 anglais  anglais  X _ Foreign=Yes 12 flat    _ OrigLang=fr
17 !     _ _ _ _ 12 punct _ _
18 "     _ _ _ _ 12 punct _ _
</div>
