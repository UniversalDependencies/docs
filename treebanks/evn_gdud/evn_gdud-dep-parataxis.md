---
layout: base
title:  'Statistics of parataxis in UD_Evenki-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Evenki-GDUD: Relations: `parataxis`

This relation is universal.

12 nodes (5%) are attached to their parents as `parataxis`.

10 instances of `parataxis` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.25.

The following 9 pairs of parts of speech are connected with `parataxis`: <tt><a href="evn_gdud-pos-DET.html">DET</a></tt>-<tt><a href="evn_gdud-pos-VERB.html">VERB</a></tt> (2; 17% instances), <tt><a href="evn_gdud-pos-PRON.html">PRON</a></tt>-<tt><a href="evn_gdud-pos-VERB.html">VERB</a></tt> (2; 17% instances), <tt><a href="evn_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="evn_gdud-pos-NOUN.html">NOUN</a></tt> (2; 17% instances), <tt><a href="evn_gdud-pos-ADP.html">ADP</a></tt>-<tt><a href="evn_gdud-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="evn_gdud-pos-ADP.html">ADP</a></tt>-<tt><a href="evn_gdud-pos-NUM.html">NUM</a></tt> (1; 8% instances), <tt><a href="evn_gdud-pos-ADP.html">ADP</a></tt>-<tt><a href="evn_gdud-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="evn_gdud-pos-PRON.html">PRON</a></tt>-<tt><a href="evn_gdud-pos-ADV.html">ADV</a></tt> (1; 8% instances), <tt><a href="evn_gdud-pos-PRON.html">PRON</a></tt>-<tt><a href="evn_gdud-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="evn_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="evn_gdud-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 parataxis	color:blue
1	Tar	that	DET	_	PronType=Dem	0	root	_	Gloss=that
2	axiːlaː-daːßi	marry-CVB.PURP-REFL	VERB	_	Mood=Prp|VerbForm=Conv	1	parataxis	_	Gloss=marry-CVB.PURP-REFL|Voice=Refl
3	әmә-tʃәː	come-PST	VERB	_	Tense=Past	1	parataxis	_	SpaceAfter=No|Gloss=come-PST
4	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 parataxis	color:blue
1	biː	biː	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	0	root	_	Gloss=1SG
2	nuŋan-maːn	nuŋan	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	1	parataxis	_	Gloss=3SG-ACC
3	iːriːß-dʒa-haː-iːriːß-dʒa-ha	iːriːß	VERB	_	VerbForm=Conv	1	parataxis	_	Gloss=pull-IPFV-CVB.ANT-pull-IPFV-CVB.ANT|Aspect=Ant
4	tʃutʃußu-Ø-m	tʃutʃußu	VERB	_	Number=Sing|Person=1	1	parataxis	_	SpaceAfter=No|Gloss=let.go-NFUT-1SG|Tense=NonPast
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 parataxis	color:blue
1	Sagdaguː	older	NOUN	_	_	3	nsubj	_	Gloss=older
2	sagdaguː-ßa	older-ACC	NOUN	_	Case=Acc	3	obj	_	Gloss=older-ACC
3	ga-ßki:	take-P.HABT	VERB	_	Aspect=Hab|VerbForm=Part	0	root	_	SpaceAfter=No|Gloss=take-P.HABT
4	,	,	PUNCT	_	_	3	punct	_	_
5	nәkuːdәguː	younger	NOUN	_	_	6	nsubj	_	Gloss=younger
6	nәkuːndәguː-ßә	younger-ACC	NOUN	_	Case=Acc	3	parataxis	_	Gloss=younger-ACC
7	ga-ßkiː	take-P.HABT	VERB	_	Aspect=Hab|VerbForm=Part	3	conj	_	SpaceAfter=No|Gloss=take-P.HABT
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


