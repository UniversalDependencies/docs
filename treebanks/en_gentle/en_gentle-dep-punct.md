---
layout: base
title:  'Statistics of punct in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `punct`

This relation is universal.

2655 nodes (15%) are attached to their parents as `punct`.

1573 instances of `punct` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.78455743879473.

The following 14 pairs of parts of speech are connected with `punct`: <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-PUNCT.html">PUNCT</a></tt> (953; 36% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PUNCT.html">PUNCT</a></tt> (833; 31% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-PUNCT.html">PUNCT</a></tt> (270; 10% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-PUNCT.html">PUNCT</a></tt> (249; 9% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-PUNCT.html">PUNCT</a></tt> (100; 4% instances), <tt><a href="en_gentle-pos-X.html">X</a></tt>-<tt><a href="en_gentle-pos-PUNCT.html">PUNCT</a></tt> (56; 2% instances), <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gentle-pos-PUNCT.html">PUNCT</a></tt> (40; 2% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-PUNCT.html">PUNCT</a></tt> (38; 1% instances), <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-PUNCT.html">PUNCT</a></tt> (32; 1% instances), <tt><a href="en_gentle-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gentle-pos-PUNCT.html">PUNCT</a></tt> (21; 1% instances), <tt><a href="en_gentle-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="en_gentle-pos-PUNCT.html">PUNCT</a></tt> (20; 1% instances), <tt><a href="en_gentle-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gentle-pos-PUNCT.html">PUNCT</a></tt> (17; 1% instances), <tt><a href="en_gentle-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gentle-pos-PUNCT.html">PUNCT</a></tt> (14; 1% instances), <tt><a href="en_gentle-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gentle-pos-PUNCT.html">PUNCT</a></tt> (12; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 punct	color:blue
1	enPR	enPR	NOUN	NN	Number=Sing	3	dep	3:dep	Discourse=organization-preparation:35->36:0:grf-col-147|Entity=(55-abstract-new-cf2-1-sgl)|SpaceAfter=No|XML=<ref target:::"https://en.wiktionary.org/wiki/Appendix:English_pronunciation"></ref>
2	:	:	PUNCT	:	_	1	punct	1:punct	_
3	nĕ	nĕ	INTJ	UH	_	0	root	0:root	Discourse=joint-other_m:36->4:3:_|Entity=(56-abstract-new-cf4-1,2-sgl
4	kst	kst	INTJ	UH	_	3	flat	3:flat	Entity=56)|SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	6:punct	_
6	IPA	IPA	PROPN	NNP	Number=Sing	12	dep	12:dep	Discourse=organization-preparation:37->39:0:grf-col-155|Entity=(57-abstract-new-cf1-1-sgl-International_Phonetic_Alphabet)|XML=<ref target:::"https://en.wiktionary.org/wiki/Wiktionary:International_Phonetic_Alphabet"></ref>
7	(	(	PUNCT	-LRB-	_	8	punct	8:punct	Discourse=elaboration-additional:38->37:0:grf-prn-152,154|SpaceAfter=No
8	key	key	NOUN	NN	Number=Sing	6	parataxis	6:parataxis	Entity=(58-abstract-new-cf3-1-sgl)|SpaceAfter=No
9	)	)	PUNCT	-RRB-	_	8	punct	8:punct	SpaceAfter=No
10	:	:	PUNCT	:	_	6	punct	6:punct	_
11	/	/	PUNCT	SYM	_	6	punct	6:punct	Discourse=joint-list_m:39->36:1:grf-seq-
12	nɛkst	nɛkst	ADJ	JJ	Degree=Pos	3	parataxis	3:parataxis	Entity=(59-abstract-new-cf5-1-sgl)
13	/	/	PUNCT	SYM	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 13 punct	color:blue
1	She	she	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj	Discourse=joint-list_m:51->50:0:_|Entity=(73-person-acc:com-cf1-1-sgl)|PDTB=NoRel:NoRel:_:_:185-199:200-212|XML=<hi rend:::"italic">
2	lives	life	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	a	a	DET	DT	Definite=Ind|PronType=Art	4	det	4:det	Entity=(74-abstract-new-cf4-2-coref
4	mile	mile	NOUN	NN	Number=Sing	7	obl:unmarked	7:obl:unmarked	Entity=74)
5	or	or	CCONJ	CC	_	6	cc	6:cc	_
6	two	two	NUM	CD	NumForm=Word|NumType=Card	4	conj	4:conj:or|7:obl:unmarked	Bridge=74<75|Entity=(75-abstract-acc:inf-cf2-1-sgl)
7	away	away	ADV	RB	Degree=Pos	2	advmod	2:advmod	MSeg=a-way|SpaceAfter=No
8	,	,	PUNCT	,	_	12	punct	12:punct	_
9	in	in	ADP	IN	_	12	case	12:case	_
10	the	the	DET	DT	Definite=Def|PronType=Art	12	det	12:det	Entity=(76-place-new-cf3-3-sgl
11	next	next	ADJ	JJ	Degree=Pos	12	amod	12:amod	_
12	village	village	NOUN	NN	Number=Sing	2	obl	2:obl:in	Entity=76)|SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	2:punct	XML=</hi>

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 punct	color:blue
1	neest	neest	X	FW	_	0	root	0:root	Discourse=ROOT:4:0|Entity=(4-abstract-new-cf1-1-sgl)|XML=<ref target:::"https://en.wiktionary.org/w/index.php?title:::neest&amp;action:::edit&amp;redlink:::1"></ref>
2	(	(	PUNCT	-LRB-	_	3	punct	3:punct	Discourse=elaboration-additional:5->4:0:grf-prn-6,8|SpaceAfter=No
3	dialectal	dialectal	ADJ	JJ	Degree=Pos	1	parataxis	1:parataxis	MSeg=dialect-al|SpaceAfter=No|XML=<hi rend:::"italic"></hi>
4	)	)	PUNCT	-RRB-	_	3	punct	3:punct	_

~~~


