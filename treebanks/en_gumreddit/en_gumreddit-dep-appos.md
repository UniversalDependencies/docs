---
layout: base
title:  'Statistics of appos in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `appos`

This relation is universal.

34 nodes (0%) are attached to their parents as `appos`.

34 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.29411764705882.

The following 11 pairs of parts of speech are connected with `appos`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (19; 56% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (3; 9% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (3; 9% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-X.html">X</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 appos	color:blue
1	_	_	VERB	VB	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Discourse=context-background:98->122:3:sem-rpt-611-612,773-784|Lem=*LOWER*|Len=5|PDTB=NoRel:NoRel:_:_:582-608:609-628|SpaceAfter=No
2	_	_	PUNCT	,	_	4	punct	4:punct	Lem=_|Len=1
3	_	_	NOUN	NN	Number=Sing	4	compound	4:compound	Entity=(16-abstract-giv:inact-cf1-2-coref|Lem=_|Len=4
4	_	_	NOUN	NN	Number=Sing	1	nsubj	1:nsubj	Entity=16)|Lem=_|Len=8|MSeg=currenc-y|SpaceAfter=No
5	_	_	PUNCT	,	_	7	punct	7:punct	Lem=_|Len=1
6	_	_	DET	DT	Definite=Ind|PronType=Art	7	det	7:det	Entity=(16-abstract-giv:act-cf1-2-appos|Lem=_|Len=1
7	_	_	NOUN	NN	Number=Sing	4	appos	4:appos|11:nsubj|12:nmod:except	Lem=_|Len=5
8	_	_	ADP	IN	_	9	case	9:case	Lem=_|Len=2
9	_	_	NOUN	NN	Number=Sing	7	nmod	7:nmod:of	Lem=_|Len=5
10	_	_	PRON	WDT	PronType=Rel	11	nsubj	7:ref	Discourse=elaboration-attribute:99->98:0:syn-mdf-615+syn-relcl-618-619,622,625|Lem=_|Len=4|PDTB=AltLex:Expansion.Level-of-detail.Arg2-as-detail:that means:618-619:609-617:620-628
11	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	acl:relcl	7:acl:relcl	Lem=mean|Len=5|MSeg=mean-s
12	_	_	PRON	NN	Number=Sing|PronType=Neg	11	obj	11:obj	Entity=(92-abstract-new-cf3-1-sgl|Lem=_|Len=7|MSeg=no-thing|Negation=Yes
13	_	_	ADP	IN	_	14	case	14:case	Discourse=adversative-antithesis:100->99:0:dm-except-621|Lem=_|Len=6|PDTB=Explicit:Expansion.Exception.Arg2-as-except:except:621:618-620:622-628
14	_	_	PRON	WP	PronType=Rel	12	nmod	7:ref	Lem=_|Len=4
15	_	_	DET	DT	Definite=Def|PronType=Art	16	det	16:det	Discourse=attribution-positive:101->102:0:sem-atsrc-623-624+lex-indwd-625+syn-rpr-626|Entity=(23-organization-giv:inact-cf2-2-coref|Lem=_|Len=3
16	_	_	NOUN	NN	Number=Sing|Typo=Yes	17	nsubj	17:nsubj	CorrectForm=government|Entity=23)|Lem=government|Len=5|XML=<sic ana:::"government"></sic>
17	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	acl:relcl	14:acl:relcl	Lem=say|Len=4|MSeg=say-s
18	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	19	nsubj	19:nsubj	Discourse=same-unit_m:102->100:0:_|Entity=(16-abstract-giv:act-cf1-1-ana)|Lem=_|Len=2
19	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	ccomp	17:ccomp	Entity=92)16)|Lem=mean|Len=5|MSeg=mean-s|SpaceAfter=No
20	_	_	PUNCT	.	_	1	punct	1:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 appos	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	4	nsubj	4:nsubj	Discourse=organization-preparation:52->61:2:_|Entity=(38-abstract-giv:inact-cf1-1-ana)|Lem=*LOWER*|Len=4
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	4:cop	Lem=be|Len=2
3	_	_	DET	DT	Definite=Def|PronType=Art	4	det	4:det	Entity=(38-abstract-giv:act-cf1-2-coref|Lem=_|Len=3
4	_	_	NOUN	NN	Number=Sing	0	root	0:root	Lem=_|Len=4
5	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=4
6	_	_	DET	DT	Definite=Def|PronType=Art	7	det	7:det	Entity=(59-abstract-new-cf3-2-sgl|Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	4	nmod	4:nmod:with	Lem=_|Len=7
8	_	_	ADP	IN	_	10	case	10:case	Lem=_|Len=2
9	_	_	DET	DT	Definite=Def|PronType=Art	10	det	10:det	Entity=(60-abstract-new-cf2-2-coref-Idiocracy|Lem=_|Len=3
10	_	_	NOUN	NN	Number=Sing	7	nmod	7:nmod:of	Entity=60)|Lem=_|Len=5|MSeg=mov-ie
11	_	_	PROPN	NNP	Number=Sing	10	appos	10:appos	Entity=(60-abstract-giv:act-cf2-1-appos-Idiocracy)59)38)|Lem=_|Len=9|MSeg=Idio-cracy|SpaceAfter=No
12	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 appos	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Discourse=elaboration-additional:97->95:1:sem-rpt-705-708,717-720|Entity=(92-abstract-giv:inact-cf1-3-coref|Lem=*LOWER*|Len=3|PDTB=EntRel:EntRel:_:_:710-716:717-740
2	_	_	PUNCT	``	_	3	punct	3:punct	Lem=_|Len=1|SpaceAfter=No
3	_	_	NOUN	NN	Number=Sing	12	nsubj	12:nsubj	Lem=_|Len=2|SpaceAfter=No
4	_	_	PUNCT	''	_	3	punct	3:punct	Entity=92)|Lem=_|Len=1
5	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	12:cop	Lem=be|Len=2
6	_	_	ADV	RB	Degree=Pos	12	advmod	12:advmod	Lem=_|Len=9|MSeg=bas-ic-ally
7	_	_	DET	DT	Definite=Ind|PronType=Art	12	det	12:det	Entity=(92-abstract-giv:act-cf1-6-pred|Lem=_|Len=1
8	_	_	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	12	amod	12:amod	Lem=sustain|Len=9|MSeg=sustain-ed
9	_	_	PUNCT	``	_	10	punct	10:punct	Lem=_|Len=1|SpaceAfter=No
10	_	_	NOUN	NN	Number=Sing	12	compound	12:compound	Lem=_|Len=2|SpaceAfter=No
11	_	_	PUNCT	''	_	10	punct	10:punct	Lem=_|Len=1
12	_	_	NOUN	NN	Number=Sing	0	root	0:root	Entity=92)|Lem=_|Len=13|MSeg=pronunci-ation
13	_	_	SCONJ	IN	_	16	mark	16:mark	Lem=_|Len=2
14	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=2
15	_	_	DET	DT	Definite=Def|PronType=Art	16	det	16:det	Entity=(98-abstract-new-cf2-2-coref|Lem=_|Len=3
16	_	_	NOUN	NN	Number=Sing	12	acl	12:acl:as	Entity=98)|Lem=_|Len=4
17	_	_	PUNCT	``	_	18	punct	18:punct	Entity=(98-abstract-giv:act-cf2-6-coref|Lem=_|Len=1|SpaceAfter=No
18	_	_	VERB	VB	VerbForm=Inf	16	appos	16:appos	Entity=(99-abstract-new-cf4-1-sgl)|Lem=_|Len=4|SpaceAfter=No
19	_	_	PUNCT	''	_	18	punct	18:punct	Lem=_|Len=1
20	_	_	CCONJ	CC	_	22	cc	22:cc	Lem=_|Len=2
21	_	_	PUNCT	``	_	22	punct	22:punct	Lem=_|Len=1|SpaceAfter=No
22	_	_	NOUN	NN	Number=Sing	16	conj	12:acl:as|16:conj:or	Entity=(100-abstract-new-cf3-1-sgl)|Lem=_|Len=4|SpaceAfter=No
23	_	_	PUNCT	''	_	22	punct	22:punct	Entity=98)|Lem=_|Len=1|SpaceAfter=No
24	_	_	PUNCT	.	_	12	punct	12:punct	Lem=_|Len=1

~~~


