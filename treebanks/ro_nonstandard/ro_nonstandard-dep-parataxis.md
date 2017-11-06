---
layout: base
title:  'Statistics of parataxis in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `parataxis`

This relation is universal.

236 nodes (1%) are attached to their parents as `parataxis`.

233 instances of `parataxis` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.99576271186441.

The following 15 pairs of parts of speech are connected with `parataxis`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (182; 77% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (15; 6% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (9; 4% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (9; 4% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt> (5; 2% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-feat-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-feat-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	Zicînd	zice	VERB	Vmg-----p	Mood=Ger|Polarity=Pos|VerbForm=Fin	0	root	_	ref=MATT 2.2
2	:	:	PUNCT	COLON	_	4	punct	_	ref=MATT 2.2
3	Unde	unde	ADV	Rw	AdvPronType=Int,Rel		4	advmod	_
4	iaste	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	ref=MATT 2.2
5	cel	cel	DET	Tdmsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Dem	6	det	_	ref=MATT 2.2
6	craiu	crai	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	4	nsubj	_	ref=MATT 2.2
7	jidovesc	jidovesc	ADJ	Afpmsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	ref=MATT 2.2
8	carele	care	PRON	Pw3msry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Int,Rel	10	nsubj:pass	_	ref=MATT 2.2
9	au	avea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	10	aux	_	ref=MATT 2.2
10	născut	naște	VERB	Vmp	Mood=Part|VerbForm=Fin	6	acl	_	ref=MATT 2.2
11	?	?	PUNCT	QUEST	_	4	punct	_	ref=MATT 2.2

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 parataxis	color:blue
1	Veţi	vrea	AUX	Vaip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres	3	aux	_	ref=MATT 10.22.content
2	fi	fi	AUX	Van	Mood=Inf	3	aux:pass	_	ref=MATT 10.22.content
3	urîţi	urî	VERB	Vmp--pm-p	Gender=Masc|Number=Plur|Mood=Part|Polarity=Pos|VerbForm=Fin	0	root	_	ref=MATT 10.22.content
4	,	,	PUNCT	COMMA	_	5	punct	_	ref=MATT 10.22.content
5	răbdarea	răbdare	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	3	parataxis	_	ref=MATT 10.22.content
6	pînă	până	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	ref=MATT 10.22.content
7	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	6	fixed	_	ref=MATT 10.22.content
8	svîrşit	sfârşit	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	5	nmod	_	ref=MATT 10.22.content
9	.	.	PUNCT	PERIOD	_	3	punct	_	ref=MATT 10.22.content

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 parataxis	color:blue
1	Adevăr	adevăr	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	2	obj	_	ref=MATT 11.9
2	grăesc	grăi	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	ref=MATT 11.9
3	voao	tu	PRON	Pp2-pd--------s	Case=Dat|Number=Plur|Person=2|PronType=Prs|Strength=Strong	2	iobj	_	ref=MATT 11.9
4	,	,	PUNCT	COMMA	_	7	punct	_	ref=MATT 11.9
5	şi	și	ADV	Rg	_	7	advcl	_	ref=MATT 11.9
6	mai	mai	ADV	Rg	_	7	advmod	_	ref=MATT 11.9
7	mare	mare	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	2	parataxis	_	ref=MATT 11.9
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	ref=MATT 11.9
9	proroc	proroc	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	7	obl	_	ref=MATT 11.9
10	.	.	PUNCT	PERIOD	_	2	punct	_	ref=MATT 11.9

~~~


