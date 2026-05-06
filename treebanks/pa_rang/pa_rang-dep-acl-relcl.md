---
layout: base
title:  'Statistics of acl:relcl in UD_Punjabi-Rang'
udver: '2'
---

## Treebank Statistics: UD_Punjabi-Rang: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="pa_rang-dep-acl.html">acl</a></tt>.

11 nodes (1%) are attached to their parents as `acl:relcl`.

11 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.63636363636364.

The following 4 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="pa_rang-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_rang-pos-VERB.html">VERB</a></tt> (7; 64% instances), <tt><a href="pa_rang-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_rang-pos-SCONJ.html">SCONJ</a></tt> (2; 18% instances), <tt><a href="pa_rang-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pa_rang-pos-VERB.html">VERB</a></tt> (1; 9% instances), <tt><a href="pa_rang-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_rang-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 acl:relcl	color:blue
1	اہ	اہ	PRON	_	PronType=Dem	3	nsubj	_	_
2	تاں	تاں	PART	_	_	3	discourse	_	_
3	اجگر	اجگر	NOUN	_	_	0	root	_	_
4	سی	ہونا	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	cop	_	_
5	جو	جو	SCONJ	_	_	8	mark	_	_
6	ہاتھی	ہاتھی	NOUN	_	Gender=Masc|Number=Sing	8	obj	_	_
7	نوں	نوں	ADP	_	_	6	case	_	_
8	پچا	پچا	VERB	_	Aspect=Perf|VerbForm=Part	3	acl:relcl	_	_
9	رہا	رہا	VERB	_	VerbForm=Part	8	xcomp	_	_
10	سی	ہونا	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	aux	_	_
11	۔	۔	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 acl:relcl	color:blue
1	انج	انج	ADV	_	_	6	advmod	_	_
2	میں	میں	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
3	اکّ	اکّ	NUM	_	_	5	nummod	_	_
4	ہور	ہور	ADJ	_	Degree=Pos	5	amod	_	_
5	چتر	چتر	NOUN	_	Gender=Masc|Number=Sing	6	obj	_	_
6	بنایا	بنایا	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
7	جو	جو	SCONJ	_	_	6	acl:relcl	_	_
8	باکیاں	باقی	NOUN	_	Gender=Masc|Number=Sing	10	obl	_	_
9	وانگ	وانگ	ADP	_	_	8	case	_	_
10	ردّ	ردّ	VERB	_	_	7	xcomp	_	_
11	ہو	ہو	VERB	_	Mood=Ind	10	compound	_	_
12	گیا	گیا	VERB	_	Aspect=Perf|Mood=Ind|VerbForm=Part	10	compound	_	_
13	۔	۔	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 22 acl:relcl	color:blue
1	اس	اس	DET	_	PronType=Dem	2	det	_	_
2	رات	رات	NOUN	_	Gender=Fem	14	obl:tmod	_	_
3	میں	میں	PRON	_	PronType=Prs	14	nsubj	_	_
4	تاں	تاں	PART	_	_	14	discourse	_	_
5	تباہ	تباہ	ADJ	_	_	7	amod	_	_
6	سمندری	سمندری	ADJ	_	Degree=Pos	7	amod	_	_
7	جہاز	جہاز	NOUN	_	Gender=Masc	10	nmod:poss	_	_
8	دے	دا	ADP	_	_	7	case	_	_
9	اس	اس	DET	_	PronType=Dem	10	det	_	_
10	جہازی	جہازی	NOUN	_	Gender=Masc	14	obl	_	_
11	توں	توں	ADP	_	_	10	case	_	_
12	وی	وی	PART	_	_	13	discourse	_	_
13	ودھیرے	ودھیر	ADV	_	_	14	advmod	_	_
14	اکلا	اکیلا	ADJ	_	Gender=Masc	0	root	_	_
15	ساں	ہونا	AUX	_	Tense=Past	14	aux	_	_
16	جنھے	جنھے	PRON	_	PronType=Rel	22	nsubj	_	_
17	وچکار	وچکار	NOUN	_	_	22	obl	_	_
18	سمندر	سمندر	NOUN	_	Gender=Masc	17	nmod:poss	_	_
19	دے	دا	ADP	_	_	18	case	_	_
20	اکّ	اک	NUM	_	NumType=Card	21	nummod	_	_
21	بلی	بلی	NOUN	_	Gender=Fem	22	obj	_	_
22	پھڑی	پھڑی	VERB	_	Aspect=Perf	14	acl:relcl	_	_
23	ہووے	ہونا	VERB	_	Mood=Ind|VerbForm=Fin	22	compound	_	_
24	۔	۔	PUNCT	_	_	14	punct	_	_

~~~


