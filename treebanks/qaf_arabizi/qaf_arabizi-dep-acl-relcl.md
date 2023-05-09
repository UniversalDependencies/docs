---
layout: base
title:  'Statistics of acl:relcl in UD_Maghrebi_Arabic_French-Arabizi'
udver: '2'
---

## Treebank Statistics: UD_Maghrebi_Arabic_French-Arabizi: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="qaf_arabizi-dep-acl.html">acl</a></tt>.

105 nodes (1%) are attached to their parents as `acl:relcl`.

101 instances of `acl:relcl` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.48571428571429.

The following 11 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="qaf_arabizi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (47; 45% instances), <tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt>-<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (29; 28% instances), <tt><a href="qaf_arabizi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (13; 12% instances), <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (5; 5% instances), <tt><a href="qaf_arabizi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="qaf_arabizi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qaf_arabizi-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt>-<tt><a href="qaf_arabizi-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt>-<tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="qaf_arabizi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 acl:relcl	color:blue
1	b	à	ADP	P	AdpType=Prep	2	case	_	ComposedUDPOS=ADP|LangO=ar_dz|ner=O
2	isem	cause	NOUN	NC	_	4	nmod	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
3	al	la	DET	DET	_	4	det	_	ComposedUDPOS=DET|LangO=ar_dz|ner=O
4	fo9er	pauvreté	NOUN	NC	_	0	root	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
5	wela	ou	CCONJ	CC	_	7	cc	_	ComposedUDPOS=CCONJ|LangO=ar_dz|ner=O
6	al	le	DET	DET	_	7	det	_	ComposedUDPOS=DET|LangO=ar_dz|ner=O
7	9aleb	coeur	NOUN	NC	_	4	conj	_	ComposedUDPOS=NOUN|DeepDep=coord|LangO=ar_dz|ner=O
8	l	qui	PRON	PROREL	PronType=Rel	9	nsubj	_	ComposedUDPOS=PRON|LangO=ar_dz|ner=O
9	wela	il_devient	VERB	V3ms	Gender=Masc|Number=Sing|Person=3	4	acl:relcl	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
10	7ejar	pierre	NOUN	NC	_	9	obj	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 acl:relcl	color:blue
1	vive	vivre	VERB	V	Mood=Sub	0	root	_	ComposedUDPOS=VERB|lango=fr|ner=O
2	saadan	Saadane	PROPN	NPP	_	1	nsubj	_	ComposedUDPOS=PROPN|lango=ar_dz|ner=B-PER
3	wa	et	CCONJ	CC	_	4	cc	_	ComposedUDPOS=CCONJ|lango=ar_dz|ner=O
4	ma3ak	avec_toi	PRON	P+PRO	_	1	parataxis	_	ComposedUDPOS=ADP+PRON|lango=ar_dz|ner=O|Reverse=P_PRO_1
5	lala	jusque	PART	PART-NEG	Polarity=Neg	6	mark	_	ComposedUDPOS=PART|lango=ar_dz|ner=O|SpaceAfter=No
6	mamat	mourir	VERB	PART-NEG+V	Polarity=Neg	4	advcl	_	ComposedUDPOS=PART+VERB|lango=ar_dz|ner=O
7	wa	et	CCONJ	CC	_	8	cc	_	ComposedUDPOS=CCONJ|lango=ar_dz|ner=O
8	nchlah	inchaAllah	INTJ	I	_	9	discourse	_	ComposedUDPOS=INTJ|lango=ar_dz|ner=O
9	takamal	tu_termine	VERB	V2ms	Gender=Masc|Number=Sing|Person=2	4	parataxis	_	ComposedUDPOS=VERB|lango=ar_dz|ner=O
10	ch	ce_que	PRON	PROREL	PronType=Rel	9	obj	_	ComposedUDPOS=PRON|lango=ar_dz|ner=O
11	abdit	tu_commencé	VERB	V2ms	Gender=Masc|Number=Sing|Person=2	10	acl:relcl	_	ComposedUDPOS=VERB|lango=ar_dz|ner=O

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 acl:relcl	color:blue
1	vive	vivre	VERB	V	Mood=Sub	8	parataxis	_	ComposedUDPOS=VERB|LangO=fr|ner=O
2	mouloudia	Mouloudia	PROPN	NPP	_	1	nsubj	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=B-ORG|SpaceAfter=No
3	ni	ni	ADV	ADV	_	4	advmod	_	ComposedUDPOS=ADV|LangO=fr|ner=O
4	3anger	Anger	PROPN	NPP	_	8	parataxis	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=B-PER
5	ni	ni	ADV	ADV-MOD	Polarity=Neg	6	advmod	_	ComposedUDPOS=ADV|LangO=fr|ner=O
6	mess3oudi	Messaoudi	PROPN	NPP	_	4	nmod	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=B-PER
7	c	c'	PRON	CLS-SUJ	_	8	expl	_	ComposedUDPOS=PRON|DeepDep=subj|EmptyTok=Yes|LangO=fr|ner=O|wordform=cest
8	est	est	VERB	V	_	0	root	_	ComposedUDPOS=VERB|LangO=fr|ner=O|wordform=cest
9	le	le	DET	DET	_	10	det	_	ComposedUDPOS=DET|LangO=fr|ner=O
10	mouloudia	mouloudia	PROPN	NPP	_	8	obj	_	ComposedUDPOS=PROPN|LangO=fr|ner=B-ORG
11	ki	qu'il	PRON	PROREL	PronType=Rel	12	nsubj	_	ComposedUDPOS=PRON|LangO=fr|ner=O
12	reste	reste	VERB	V	_	10	acl:relcl	_	ComposedUDPOS=VERB|LangO=fr|ner=O

~~~


