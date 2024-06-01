# Parallel Treebanks

Treebanks of different langauges may be parallel, that is, sentences in treebank A are translations of sentences in treebank B. To make this fact automatically detectable and useful, it should be encoded in the machine-readable metadata in the README file of each such treebank. An ID should be selected for the parallel treebank set; in the ideal case, this ID is identical to the treebank ID in the repository name (e.g., the PUD – parallel universal dependencies – treebanks are named UD_English-PUD, UD_German-PUD etc., and the ID of the collection is "PUD"). However, it is not enough to rely on repository names because not all treebanks with identical acronyms are members of one parallel set, and sometimes there are reasons why members of the same set do not have the same acronym. In the case of PUD, the metadata line would be

```
Parallel: PUD
```

and it should appear in the README file of each treebank that belongs to the PUD set. It is then assumed that all treebanks in the set have the same number of sentences and for any N, the N-th sentence has the same meaning in each treebank of the set. It is recommended that the sentence ids are identical in this case. If one sentence in treebank A corresponds to several sentences in treebank B, the corresponding sentences in treebank B have to be exceptionally treated as one sentence in CoNLL-U; the root of the second sentence will be attached to the root of the first sentence via the `parataxis` relation. If the treebanks are split into training, development and test files, the split must be identical in all treebanks of the parallel set.

It is possible that only some sentences in a treebank are parallel to another treebank. For example, some treebanks contain the 20 Cairo examples (Cairo CICLing Corpus) but they also contain other sentences. Another example is the SET treebanks of Croatian and Serbian: They have different sizes and sources of the text, but a core part comes from the South European Times and is parallel. In such cases, the metadata line must have an extended form where the collection ID is followed by " = " and one or more ranges of sentence ids. Each range must be completely inside one CoNLL-U file, so if there is train, dev, and test, we need a separate range for each (make sure they are listed in the alphabetical order of the file names, i.e., dev first, then test, then train). Again, training sentences must be parallel with training sentences, dev with dev, test with test. It is assumed that corresponding ranges in parallel treebanks have the same numbers of sentences (but note that M ranges in treebank A may correspond to N ranges in treebank B; a 1-1 mapping between ranges is not required).

A range is defined by the sent_id of the first and the last sentence in the range, delimited by ' .. ' (note the spaces around the range operator, they are there to avoid confusion with the characters in the sentence id). If there are multiple separate ranges (either from different data files or interrupted by sentences that are not parallel), the ranges are listed on one line and separated by ' , ' (again with spaces). If a range consists of just a single sentence, the sentence id is indicated only once and there is no ' .. ' delimiter.

Croatian example:

```
Parallel: SET = set.hr-s1 .. set.hr-s569 , set.hr-s571 .. set.hr-s3692
```

Serbian lacks the translation of set.hr-s570 and the numbering of the sentences is out of sync but otherwise the sentences before and after the missing one are parallel.

```
Parallel: SET = set-s1 .. set-s3694
```

A treebank may contain segments that belong to different parallel collections. Then there will be multiple `Parallel` lines in the treebank's README.

Finally, a treebank may contain data that is parallel to parts of other treebanks but the treebanks are not results of one annotation project and it is not practical to require a 1-1 mapping between sentences. A prominent example is the Bible. Various treebanks contain portions of Bible translations, there are partial pairwise overlaps in the verses covered, but for each language pair the overlap may be different. On the other hand, there is an established reference system that identifies the source verse for each token; UD uses the optional [Ref](https://universaldependencies.org/misc.html#ref) attribute in MISC to encode this. For example, `Ref=GEN_1.1` in MISC means that the token is from Genesis 1.1; `Ref=MATT_5.15` marks a token from the Gospel of Matthew 5.15. In these cases, the metadata line will simply indicate there are some sentences taken from the Bible and the `Ref` attribute in MISC is used to map tokens to known segments:

```
Parallel: Bible (Ref)
```

## Current parallel treebanks in UD (this list may be incomplete)

* PUD: Arabic, Bengali (currently empty), Chinese, Czech, English, Finnish, French, Galician, German, Hindi, Icelandic, Indonesian, Italian, Japanese, Japanese PUDLUW, Korean, Magahi (currently empty), Polish, Portuguese, Russian, Spanish, Swedish, Thai, Turkish
* ParTUT: English, French, Italian
* LinES: English, Swedish
* SET: Croatian, Serbian
* HK: Cantonese, Chinese
* ZhGSD: Chinese GSD, Chinese GSDSimp
* Atis: English, Turkish
* Bible: Ancient Greek PROIEL, Ancient Hebrew, Coptic, Gothic, Latin PROIEL, Old Church Slavonic, Romanian Nonstandard, Yoruba
* Cairo: Latgalian, Latvian, Luxembourgish, Tswana, others have it as one part of larger data (Buryat, Macedonian, Malayalam, what else?)


# Genres

At present, we can only list the genres that are present somewhere in the treebank. There is no machine-readable way how to say which sentences belong to which genre. This we could do the same way as the parallel ranges above, using ranges of sentence ids:

```
Genre: news = set-s1 .. set-s3694
```

However, we probably need to revisit the taxonomy of genres (or text types). The current granularity is not optimal. Note that we use the term _genre_ in a broad sense of text type; besides the genre proper, it sometimes includes the medium, topic etc.

## Decision list

1. Can we specify the genre at all? We are required to say what we know about the genre in the metadata in README, but we could say that the genre is unknown:

```
Genre: unknown
```

   In particular, if the corpus consists of randomly shuffled isolated sentences that resulted from crawling the web, we can hardly know the genre of the document a sentence was taken from. Hence the genre is unknown. This value includes the _web_ genre, which was among the permitted values until UD 2.14. However, the _unknown_ genre is broader, as the data source does not have to be the web. On the other hand, there are texts that do come from the web, yet they can be clearly assigned to a more specific genre. Note that the _unknown_ value should not be used if we know that there are multiple genres in the corpus, we know which ones, we just do not know where exactly (but it would be possible to tell that if an annotator went over the corpus again). In such cases, multiple genre lines can be used without sentence id ranges.

   A special type of isolated sentences is examples from a reference grammar, language textbook or other linguistic literature. These sentences are often made-up examples (or carefully selected from fieldwork material) to demonstrate a particular grammatical construction. Many UD treebanks contain such sentences. These should not be labeled as unknown genre; instead, they should use the _grammar_ label:

```
Genre: grammar
```

2. If we believe that the corpus or its part should have an identifiable genre, the next question to answer is whether the text / utterance was prepared or spontaneous. Written language is typically prepared (the author can think about it, revisit it and edit it), even if not always with the same level of care. Chats on social media are borderline, so they get their own label. Spoken language can be also prepared (e.g., news on TV) or it can be spontaneous. Political speeches (including parlament proceedings) are also borderline: Some of them are prepared, some of them are spontaneous or half-prepared (the speaker has notes but not the exact text). More generally, _speech_ is a monologue intended for some audience (besides political speeches these could be laudatios, speeches at funerals or various other occasions). But the label does not cover all kinds of spoken data!

```
Genre: speech
```

   An interview (e.g. a journalist interviewing a celebrity) is typically prepared on the side of the interviewer and partially spontaneous (with possible corrections before it is published) on the side of the interviewed. It gets its own label (but note that this label does not cover other types of dialogues):

```
Genre: interview
```

   Short posts such as tweets get the label _social_. They may be prepared to some extent but often they are written quickly, with shortcuts and possibly errors. This genre includes chats and discussions under other posts or under larger articles (while the larger article itself does not belong to the _social_ genre). User-generated reviews of products and services are not considered _social_ (provided they are posted at places dedicated for reviews and not among general posts on Twitter, Facebook, Telegram, Reddit etc.)

```
Genre: social
```

   For all other written data and for spoken language that is read or recited (i.e., there is probably a written original), consider it prepared and go to the next step.
   For all other spoken data, consider it spontaneous and give it the label _spontaneous_. Hence, the former _spoken_ genre, which was among the permitted values until UD 2.14, should now be split to _speech_, _interview_, _spontaneous_, or as the case may be, merged with the appropriate prepared genre. If it is not clear that a spoken utterance is prepared or qualifies as _speech_ or _interview_, it should be _spontaneous_ by default. Typical spontaneous data are transcriptions of unprepared dialogues such as TV debates; also recordings of conversations at home and in other natural settings.

```
Genre: spontaneous
```

3. Drama contains mostly dialogues, sometimes monologues, and occasional other notes such as scene description. It may or may not be in verse. Note that movie subtitles would get the _drama_ label, too.

```
Genre: drama
```

4. If it is in verse but it is not a play (drama, see above), then it is a candidate for the _poetry_ label, especially if it is lyric poetry (for epic poetry, there may be edge cases where one may want to consider merging it with prose narration, but _poetry_ should still be the default). Song lyrics belong here, too. This category is probably also the best fit for prayers.

```
Genre: poetry
```

5. Text produced by second language learners in the language class may contain specific errors and have their own category (formerly _learner-essays_, now just _learner_). Typically such texts are short essays but they could fall to various other genres below (such as _mail_, _narration_ or _essay_) if they were not produced by language learners. Note that the learner category should not absorb everything written by a non-native speaker; it is designed specifically for texts created in the language learning environment.

```
Genre: learner
```

6. Letters including e-mails get the label _mail_. This includes the former _email_ genre, which was among the permitted values until UD 2.14. In general, these are monologues addressed to a concrete person or group of persons, unless they were already identified as a speech, poetry etc. We do not distinguish personal letters from official letters and business correspondence.

```
Genre: mail
```

7. Novels, short stories and other works of fiction are labeled as _narration_. It is not decisive whether the contents is fiction or it reflects real events (and in some cases, such as the Bible, the question of factuality would be controversial). The _narration_ genre also includes non-fiction narratives such as chronicles, biographies and travelogues. On the other hand, _news_ is a separate category, not included in _narration_. The former _bible_ genre, used until UD 2.14, is now included in _narration_.

```
Genre: narration
```

8. Daily newspapers typically contain short articles describing recent events and are labeled _news_. Magazines are typically not included in this genre, as they contain longer reads which may be popular science, reviews, interviews and other material. However, it will be practical if the whole issue of a daily newspaper (perhaps without weekend supplements) can be categorized as _news_ without measuring the length of individual articles. Besides political news it may contain business news, sports results, weather forecasts, TV programs, announcements, advertisments etc. Transcribed spoken news broadcast through radio, TV or internet also qualify as _news_.

```
Genre: news
```

9. Reviews are evaluative texts of any length and regardless of the qualification of the author (hence, the category covers user-generated product or service reviews as well as book or movie reviews written by experts). (In the former genres used until UD 2.14 the label was in plural – _reviews_.)

```
Genre: review
```

10. Laws, international treaties, local regulations, contracts, terms and conditions of a service are all in a broad category called _regulation_. Note that while legal bills approved by a parliament are _regulation_, the proceedigns of the parliament deliberation belong to the _speech_ category. From the former genres that were valid until UD 2.14, the new _regulation_ category covers both _legal_ and _government_.

```
Genre: regulation
```

11. Manuals, guidelines, documentation, patent applications and various other types of instructions (including recipes, travel guides or directions how to get somewhere) are labeled as _instruction_. Furthermore, this category includes specialized descriptive texts such as technical report from an experiment or health report with a patient's diagnose (until UD 2.14 probably labeled as _medical_). Textbooks may also belong here, unless they are seen as fitting better to other categories (for example _academic_ or _grammar_ examples).

```
Genre: instruction
```

12. Data from question answering competitions are close to educative or encyclopedic domains but they have a distinct form and are kept in a separate category.

```
Genre: qa
```

13. Articles from Wikipedia or any other encyclopedia, as well as individual popular science articles from magazines are categorized as _encyclopedia_. This includes the former genre _wiki_ that was used until UD 2.14. Dictionary entries would be also included in this category.

```
Genre: encyclopedia
```

14. Scholarly articles from any field are categorized as _academic_. Unlike _encyclopedia_, they are intended for expert audience rather than the general public. There was a same-named category among the genres until UD 2.14, however, it is not clear whether academic papers about medicine were labeled as _academic_ or _medical_; now they should be _academic_.

```
Genre: academic
```

15. A text that discusses a topic, possibly presenting opinion of the author and/or other people, and does not belong to any of the above categories, is an _essay_. This may include some texts formerly (until UD 2.14) categorized as _blog_.

```
Genre: essay
```

TODO:

* I suppose there must be a taxonomy of text types somewhere that someone has created for corpora but I did not find anything that would look authoritative.
* List of genres known and allowed in UD v2 (see validator or [release checklist](/release_checklist.html#treebank-metadata)).
  * none, news, fiction, nonfiction, academic, medical, legal, government, blog, reviews, social, email, spoken, wiki, web, bible, grammar-examples, learner-essays, poetry
* See what Sara et al. did in their genre-balanced UD.
  * https://aclanthology.org/2023.mrl-1.19.pdf
    * https://github.com/UppsalaNLP/UD-MULTIGENRE
  * https://aclanthology.org/2021.tlt-1.7.pdf
* See the Helsinki Corpus (Old, Middle, Early Modern English) at https://varieng.helsinki.fi/CoRD/corpora/HelsinkiCorpus/genres.html

The categorization I sketched in the decision list above largely ignores the topic (domain) of the data, which can obviously also affect the linguistic properties. If we find it important, we could possibly add some coarse-grained topic classification such as the following:

* medicine, natural sciences, mathematics
* technology, engineering, industry, agriculture
* law, politology, economy, social sciences
* humanities, arts, culture, religion
  * what about sports?

To discuss:

Instead of the sentence id ranges in README, we could define sentence-level tags that would be added to every sentence belonging to a parallel dataset or to a genre. It would use more space but filtering of the data (when we are looking for a particular genre or parallel dataset) would be easier. The metadata in README would be more readable; we would still keep a general overview (list of genres, id of parallel datset) there.
