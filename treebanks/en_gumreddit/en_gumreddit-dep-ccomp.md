---
layout: base
title:  'Statistics of ccomp in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `ccomp`

This relation is universal.

201 nodes (1%) are attached to their parents as `ccomp`.

199 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.2636815920398.

The following 15 pairs of parts of speech are connected with `ccomp`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (111; 55% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (26; 13% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (25; 12% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (10; 5% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (8; 4% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (8; 4% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp	color:blue
1	_	_	ADV	RB	_	2	advmod	2:advmod	Discourse=attribution-positive:36->37:0:sem-atsrc-221+lex-indwd-221+syn-rpr-222|Lem=*LOWER*|Len=3
2	_	_	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Lem=_|Len=7
3	_	_	SCONJ	IN	_	8	mark	8:mark	Discourse=contingency-condition:37->38:1:dm-if-222|Lem=_|Len=2
4	_	_	DET	DT	Definite=Def|PronType=Art	6	det	6:det	Bridge=41<44|Entity=(44-organization-acc:inf-cf3-3-coref|Lem=_|Len=3
5	_	_	NOUN	NN	Number=Sing	6	compound	6:compound	Lem=_|Len=4
6	_	_	NOUN	NN	Number=Sing	8	nsubj	8:nsubj	Entity=44)|Lem=_|Len=7
7	_	_	ADV	RB	_	8	advmod	8:advmod	Lem=_|Len=4
8	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	2:ccomp	Cxn=Interrogative-Polar-Indirect|Lem=mail|Len=5|MSeg=mail-s
9	_	_	DET	DT	Definite=Ind|PronType=Art	12	det	12:det	Entity=(45-object-new-cf4-3,4-coref|Lem=_|Len=1
10	_	_	PROPN	NNP	Number=Sing	12	compound	12:compound	Entity=(42-person-giv:act-cf1*-1,2-coref-Sammy_Sosa|Lem=_|Len=5|MSeg=Samm-y
11	_	_	PROPN	NNP	Number=Sing	10	flat	10:flat	Entity=42)|Lem=_|Len=4
12	_	_	NOUN	NN	Number=Sing	8	obj	8:obj	Entity=45)|Lem=_|Len=4
13	_	_	ADP	IN	_	15	case	15:case	Lem=_|Len=2
14	_	_	DET	DT	PronType=Ind	15	det	15:det	Entity=(46-person-new-cf5-2-sgl|Lem=_|Len=5
15	_	_	NOUN	NN	Number=Sing	8	obl	8:obl:to	Lem=_|Len=6
16	_	_	ADP	IN	_	17	case	17:case	Lem=_|Len=2
17	_	_	PROPN	NNP	Number=Sing	15	nmod	15:nmod:in	Entity=(31-place-giv:inact-cf2-1-coref-United_States)46)|Lem=_|Len=7|SpaceAfter=No
18	_	_	PUNCT	.	_	2	punct	2:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 22 ccomp	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=attribution-positive:6->8:0:sem-atsrc-30+lex-indwd-31+lex-indwd-38|Entity=(10-person-acc:com-cf3-1-sgl)|Lem=_|Len=1
2	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=_|Len=4
3	_	_	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	Entity=(11-abstract-new-cf2-3-coref|Lem=_|Len=1
4	_	_	ADJ	JJ	Degree=Pos	5	amod	5:amod	Lem=_|Len=4
5	_	_	NOUN	NN	Number=Sing	2	obj	2:obj|12:nsubj	Lem=_|Len=6
6	_	_	PUNCT	-LRB-	_	9	punct	9:punct	Discourse=elaboration-additional:7->6:0:grf-prn-35,39|Lem=_|Len=1|SpaceAfter=No
7	_	_	DET	DT	PronType=Ind	9	det	9:det	Entity=(11-abstract-giv:act-cf2-3-appos|Lem=_|Len=7|MSeg=an-other
8	_	_	PROPN	NNP	Number=Sing	9	compound	9:compound	Entity=(12-place-new-cf6-1-sgl-Reddit)|Lem=Reddit|Len=6
9	_	_	NOUN	NN	Number=Sing	5	appos	5:appos	Entity=11)|Lem=_|Len=7|SpaceAfter=No
10	_	_	PUNCT	-RRB-	_	9	punct	9:punct	Lem=_|Len=1
11	_	_	PRON	WDT	PronType=Rel	12	nsubj	5:ref	Discourse=attribution-positive:8->9:0:sem-atsrc-32-40+lex-indwd-41+syn-rpr-42|Lem=_|Len=5
12	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	acl:relcl	5:acl:relcl	Lem=state|Len=6|MSeg=stat-ed
13	_	_	SCONJ	IN	_	22	mark	22:mark	Discourse=adversative-contrast_m:9->3:2:_|Lem=_|Len=4
14	_	_	NOUN	NNS	Number=Plur	17	nsubj	17:nsubj	Entity=(7-animal-giv:act-cf1*-1-coref-Giant_panda)|Lem=panda|Len=6|MSeg=panda-s
15	_	_	AUX	VBG	Tense=Pres|VerbForm=Part	17	cop	17:cop	Lem=be|Len=5|MSeg=be-ing
16	_	_	ADV	RB	Degree=Pos	17	advmod	17:advmod	Lem=_|Len=11|MSeg=notorious-ly
17	_	_	ADJ	JJ	Degree=Pos	22	csubj	22:csubj	Lem=_|Len=4
18	_	_	SCONJ	IN	_	19	mark	19:mark	Lem=_|Len=2
19	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	17	advcl	17:advcl:at	Entity=(13-event-new-cf5-1-disc)|Lem=reproduce|Len=11|MSeg=re-produc-ing
20	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	cop	22:cop	Lem=be|Len=2
21	_	_	DET	DT	Definite=Ind|PronType=Art	22	det	22:det	Entity=(14-abstract-new-cf4-2-sgl|Lem=_|Len=1
22	_	_	NOUN	NN	Number=Sing	12	ccomp	12:ccomp	Entity=14)11)|Lem=_|Len=4|SpaceAfter=No
23	_	_	PUNCT	.	_	2	punct	2:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 ccomp	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=evaluation-comment:37->3:4:lex-indwd-258+lex-indwd-266|Entity=(56-person-acc:com-cf2-1-sgl)|Lem=_|Len=1
2	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=_|Len=4
3	_	_	DET	PDT	PronType=Tot	5	det:predet	5:det:predet	Entity=(57-abstract-acc:com-cf3-3-sgl|Lem=_|Len=3
4	_	_	DET	DT	Number=Plur|PronType=Dem	5	det	5:det	Lem=this|Len=5
5	_	_	NOUN	NNS	Number=Plur	2	obj	2:obj	Entity=57)|Lem=comment|Len=8|MSeg=comment-s
6	_	_	VERB	VBG	VerbForm=Ger	5	acl	5:acl	Cxn=Ditransitive|Discourse=attribution-positive:38->39:0:sem-atsrc-259-261+lex-indwd-262|Lem=tell|Len=7|MSeg=tell-ing
7	_	_	NOUN	NN	Abbr=Yes|Number=Sing	6	iobj	6:iobj	Entity=(58-person-acc:com-cf1-1-coref)|Lem=_|Len=2
8	_	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	10:nsubj	Discourse=elaboration-additional:39->37:0:_|Entity=(58-person-giv:act-cf1-1-ana)|Lem=_|Len=2
9	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	10:cop	Lem=be|Len=2
10	_	_	ADJ	JJ	Degree=Pos	6	ccomp	6:ccomp	Lem=_|Len=5|SpaceAfter=No
11	_	_	PUNCT	.	_	2	punct	2:punct	Lem=_|Len=1

~~~


