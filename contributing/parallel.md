---
layout: base
title: 'Parallel Treebanks'
udver: '2'
---

# Parallel Treebanks

Treebanks of different langauges may be parallel, that is, sentences in treebank A are translations of sentences in
treebank B. To make this fact automatically detectable and useful, it should be encoded in the [machine-readable
metadata in the README file](repository_files.html#treebank-metadata) of each such treebank. An ID should be selected
for the parallel treebank set; in the ideal case, this ID corresponds to the treebank ID in the repository name
(e.g., the PUD – parallel universal dependencies – treebanks are named UD_English-PUD, UD_German-PUD etc., and the ID
of the collection is “`pud`”). However, it is not enough to rely on repository names because not all treebanks with
identical acronyms are members of one parallel set, and sometimes there are reasons why members of the same set do not
have the same acronym. In the case of PUD, the metadata line would be

```
Parallel: pud
```

and it should appear in the README file of each treebank that belongs to the PUD set.

While PUD has the ideal setting where all treebanks have the same number of sentences and for any N, the N-th sentence
of any member treebank has the same meaning (and same `sent_id`), this is not necessarily guaranteed for other parallel
treebank collections.

In the case of PUD, all treebanks have the same number of sentences and for any N, the N-th sentence of any member
treebank has the same meaning and the same `sent_id`. If one sentence in treebank A corresponds to several sentences
in treebank B, the corresponding sentences in treebank B are exceptionally treated as one sentence in CoNLL-U; the
root of the second sentence will be attached to the root of the first sentence via the `parataxis` relation. From the
perspective of parallel data processing, this is the ideal configuration; unfortunately, it cannot be guaranteed for
all parallel treebank collections in UD.

Nevertheless, one requirement should be always ensured: If the treebanks are split into training, development and test
files, the split must be identical in all treebanks of the parallel set.

It is possible that only some sentences in a treebank are parallel to another treebank. For example, some treebanks
contain the 20 Cairo examples (Cairo CICLing Corpus) but they also contain other sentences. Another example is the
SET treebanks of Croatian and Serbian: They have different sizes and sources of the text, but a core part comes from
the South European Times and is parallel. It is even possible that one treebank has sentences from multiple parallel
collections. For instance, some TueCL treebanks contain the 20 `cairo` sentences plus additional parallel sentences,
which are identified as `tuecl`. Therefore, their metadata descriptions contain two collection identifiers separated
by a space:

```
Parallel: cairo tuecl
```

New treebanks (languages) can be added to an existing parallel collection by simply referring to the collection in the
treebank's README file. To register a new parallel collection, write an e-mail to Dan Zeman (zeman@ufal.mff.cuni.cz).
<!-- The list of known collections is currently hard-coded in the validation infrastructure. In the future, we may
implement a self-registration system. -->

Within the CoNLL-U files, parallel sentences are identified using a dedicated sentence-level comment `parallel_id`. It
contains the identificaction of the parallel collection, followed by a treebank-independent identification of the
sentence. This part may but does not have to be identical to the `sent_id` attribute. But it must be identical for
the corresponding sentence in all treebanks in the collection.

Collection ids are strings of lowercase English letters (`[a-z]+`). Parallel sentence ids are just integer numbers in
some collections, while in others (e.g. in `pud`) they may contain also lowercase English letters or a hyphen. Other
characters, such as uppercase letters, non-English letters, underscore etc. are currently not permitted and it does not
seem to be necessary to permit them. The two parts (collection id and sentence id) are separated by a slash:

```
# parallel_id = cairo/15
```

Finally, a treebank may contain data that is parallel to parts of other treebanks but the treebanks are not results
of one annotation project and it is not practical to require a 1-1 mapping between sentences. A prominent example is
the Bible. Various treebanks contain portions of Bible translations, there are partial pairwise overlaps in the verses
covered, but for each language pair the overlap may be different. On the other hand, there is an established reference
system that identifies the source verse for each token; UD uses the optional
[Ref](https://universaldependencies.org/misc.html#ref) attribute in MISC to encode this. For example, `Ref=GEN_1.1`
in MISC means that the token is from Genesis 1.1; `Ref=MATT_5.15` marks a token from the Gospel of Matthew 5.15. While
it may seem redundant, it is recommended that these MISC references are preserved in addition to the `parallel_id`
comment before the sentence. They allow to identify the extent of individual verses more accurately, even if one verse
is split to multiple sentences or one sentence contains (parts of) multiple verses. On the other hand, `parallel_id`
is still needed, as it is compatible with other parallel treebanks and makes the information accessible to more general
scripts, although in a less accurate form.

```
# sent_id = 12667
# parallel_id = bible/matt-1-1
# text = liber generationis Iesu Christi filii David filii Abraham
1	liber	liber	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	0	root	_	Ref=MATT_1.1
2	generationis	generatio	NOUN	Nb	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	Ref=MATT_1.1
…
```

## Alternative translations

In some cases, a treebank will provide multiple alternative translations for the same parallel sentence. This happens
in particular with artificial grammatical examples, such as the `cairo` and the `tuecl` collections. If a sentence has
multiple alternatives, all alternatives of the sentence in the given language (treebank) should have `parallel_id`
extended with `/altN` where `N` is an integer number. For example:

```
# parallel_id = cairo/15/alt1
```

The numbers only distinguish alternatives inside one language. The other languages do not need to have alternatives
for that sentence and if they do, there is no implicit mapping between same-numbered alternatives across languages.
All alternatives within one language are considered good enough translations of the sentence in the other languages.

## Partial translations

Sometimes the alignment between sentences of different languages is not 1-1, that is, one sentence in language A may
correspond to several sentences in language B. Or more abstractly, the virtual segment identified by a parallel
sentence id may correspond to (or overlap with) M sentences in language A, N sentences in language B etc. When that
happens, multiple sentences in one treebank need the same parallel sentence id. To distinguish them from each other
and keep the `parallel_id` unique (and also to signal that this is not the complete translation of the parallel
segment), the `parallel_id` must be extended with `/partN` where `N` is an integer number. For example:

```
# parallel_id = bible/matt-1-2/part1
```

The numbers should be ordered in ascending order, with the assumption that concatenating the sentences in that order
will yield the complete translation of the segment identified by the parallel sentence id.

The above mechanism provides means for the case when one Bible verse is split into several sentences in the CoNLL-U
file. It does not solve the opposite situation where one sentence contains several Bible verses (or their parts). If
that happens and if it is not possible to split the segment into multiple CoNLL-U sentences, a parallel sentence id
has to be selected that is considered most representative of the sentence contents (it covers the largest part of
the contents, it is not used to identify other sentences etc.) The `Ref` attributes in MISC have to be used to delimit
the verses at token level.

If alternatives are combined with partial translations, `alt` goes before `part`, with no additional slash, as in
`bible/matt-1-2/alt1part1`.

## Current parallel treebanks in UD (this list may be incomplete)

* `pud`: Arabic, Bengali (currently empty), Chinese, Czech, English, Finnish, French, Galician, German, Hindi, Icelandic, Indonesian, Italian, Japanese, Japanese PUDLUW, Korean, Magahi (currently empty), Polish, Portuguese, Russian, Spanish, Swedish, Thai, Turkish
* `partut`: English, French, Italian
* `lines`: English, Swedish
* `set`: Croatian, Serbian
* `hk`: Cantonese, Chinese
* `zhgsd`: Chinese GSD, Chinese GSDSimp
* `jagsd`: Japanese GSD, Japanese GSDLUW
* `atis`: English, Turkish
* `bible`: Ancient Greek PROIEL, Ancient Greek PTNK, Ancient Hebrew, Coptic, Gothic, Latin PROIEL, Old Church Slavonic, Romanian Nonstandard, Yoruba
* `cairo`: Latgalian, Latvian, Luxembourgish, Tswana, others have it as one part of larger data (Buryat, Macedonian, Malayalam, what else?)
* `tuecl`: extension of Cairo, currently focusing on Turkic languages: Azerbaijani, Kyrgyz, Turkish, Uzbek
