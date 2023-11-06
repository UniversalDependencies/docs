---
layout: base
title:  'Statistics of nsubj:outer in UD_Ancient_Greek-PTNK'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Greek-PTNK: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="grc_ptnk-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="grc_ptnk-dep-nsubj-pass.html">nsubj:pass</a></tt>.

13 nodes (0%) are attached to their parents as `nsubj:outer`.

13 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.92307692307692.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="grc_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_ptnk-pos-PRON.html">PRON</a></tt> (12; 92% instances), <tt><a href="grc_ptnk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="grc_ptnk-pos-PRON.html">PRON</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 nsubj:outer	color:blue
1	εἶπεν	εἶπον	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Gloss=to-say
2	δὲ	δέ	CCONJ	_	_	1	cc	_	Gloss=but,and,however
3	αὐτοῖς	αὐτός	PRON	_	Case=Dat|Gender=Masc,Neut|Number=Plur|PronType=Prs	1	iobj	_	Gloss=he,it,-self,same
4	Ἰωσήφ	Ἰωσήφ	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	Gloss=Joseph|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	Τοῦτό	οὗτος	PRON	_	Case=Acc,Nom|Gender=Neut|Number=Sing|PronType=Dem	10	nsubj:outer	_	Gloss=this|Outer=Yes
7	ἐστιν	εἰμί	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	Gloss=to-be|SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	ὃ	ὁ	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	10	nsubj	_	Gloss=who,which,that
10	εἴρηκα	ἐρέω	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	Gloss=to-say
11	ὑμῖν	ὑμεῖς	PRON	_	Case=Dat|Number=Plur|Person=2|PronType=Prs	10	iobj	_	Gloss=you
12	λέγων	λέγω	VERB	_	Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	10	advcl	_	Gloss=to-say
13	ὅτι	ὅτι	SCONJ	_	_	15	mark	_	Gloss=because,that-for|SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	_	_
15	Κατάσκοποί	κατάσκοπος	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	12	ccomp	_	Gloss=a-spy
16	ἐστε	εἰμί	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	15	cop	_	Gloss=to-be|SpaceAfter=No
17	·	·	PUNCT	_	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 21 nsubj:outer	color:blue
1	καὶ	καί	CCONJ	_	_	2	cc	_	Gloss=and,also,even,then,next
2	ἠρώτα	ἐρωτάω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Gloss=to-ask
3	τοὺς	ὁ	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	4	det	_	Gloss=the
4	εὐνούχους	εὐνοῦχος	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	2	obj	_	Gloss=eunuch
5	Φαραώ	Φαραώ	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	Gloss=Pharaoh|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	οἳ	ὁ	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	13	nsubj	_	Gloss=who,which,that
8	ἦσαν	εἰμί	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	13	cop	_	Gloss=to-be
9	μετ᾿	μετά	ADP	_	_	10	case	_	Gloss=+G=with;-+A=after
10	αὐτοῦ	αὐτός	PRON	_	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Prs	13	obl	_	Gloss=he,she,it,-self,same
11	ἐν	ἐν	ADP	_	_	13	case	_	Gloss=in,on,by,with,to
12	τῇ	ὁ	DET	_	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Dem	13	det	_	Gloss=the
13	φυλακῇ	φυλακή	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	4	acl:relcl	_	Gloss=guard,guarding;-prison
14	παρὰ	παρά	ADP	_	_	16	case	_	Gloss=+G=from;-+D=before;-+A=beside,along
15	τῷ	ὁ	DET	_	Case=Dat|Definite=Def|Gender=Masc,Neut|Number=Sing|PronType=Dem	16	det	_	Gloss=the
16	κυρίῳ	κύριος	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	13	nmod	_	Gloss=lord
17	αὐτοῦ	αὐτός	PRON	_	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Prs	16	nmod	_	Gloss=he,she,it,-self,same|SpaceAfter=No
18	,	,	PUNCT	_	_	19	punct	_	_
19	λέγων	λέγω	VERB	_	Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	2	advcl	_	Gloss=to-say|SpaceAfter=No
20	,	,	PUNCT	_	_	21	punct	_	_
21	Τί	τίς	PRON	_	Case=Acc,Nom|Gender=Neut|Number=Sing|PronType=Int	26	nsubj:outer	_	Gloss=what?,which?;-+enclitic=anything,something|Outer=Yes
22	ὅτι	ὅτι	SCONJ	_	_	26	mark	_	Gloss=because,that-for
23	τὰ	ὁ	DET	_	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Dem	24	det	_	Gloss=the
24	πρόσωπα	πρόσωπον	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	26	nsubj	_	Gloss=face
25	ὑμῶν	ὑμεῖς	PRON	_	Case=Gen|Number=Plur|Person=2|PronType=Prs	24	nmod	_	Gloss=you
26	σκυθρωπὰ	σκυθρωπός	ADJ	_	Case=Acc,Nom|Gender=Neut|Number=Plur	19	ccomp	_	Gloss=gloomy
27	σήμερον	σήμερον	ADV	_	_	26	obl	_	Gloss=today,this-day|SpaceAfter=No
28	;	;	PUNCT	_	_	27	punct	_	_

~~~


