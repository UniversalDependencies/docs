---
layout: base
title:  'Statistics of cc:preconj in UD_Ancient_Greek-PTNK'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Greek-PTNK: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="grc_ptnk-dep-cc.html">cc</a></tt>.

25 nodes (0%) are attached to their parents as `cc:preconj`.

20 instances of `cc:preconj` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28.

The following 6 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="grc_ptnk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="grc_ptnk-pos-CCONJ.html">CCONJ</a></tt> (6; 24% instances), <tt><a href="grc_ptnk-pos-PRON.html">PRON</a></tt>-<tt><a href="grc_ptnk-pos-CCONJ.html">CCONJ</a></tt> (6; 24% instances), <tt><a href="grc_ptnk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="grc_ptnk-pos-CCONJ.html">CCONJ</a></tt> (5; 20% instances), <tt><a href="grc_ptnk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="grc_ptnk-pos-CCONJ.html">CCONJ</a></tt> (4; 16% instances), <tt><a href="grc_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_ptnk-pos-CCONJ.html">CCONJ</a></tt> (2; 8% instances), <tt><a href="grc_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_ptnk-pos-PART.html">PART</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc:preconj	color:blue
1	καὶ	καί	CCONJ	_	_	2	cc	_	Gloss=and,also,even,then,next
2	συνανέβησαν	συναναβαίνω	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Gloss=to-go-up-with
3	μετ᾿	μετά	ADP	_	_	4	case	_	Gloss=+G=with;-+A=after
4	αὐτοῦ	αὐτός	PRON	_	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Prs	2	obl	_	Gloss=he,she,it,-self,same
5	καὶ	καί	CCONJ	_	_	6	cc:preconj	_	Gloss=and,also,even,then,next
6	ἅρματα	ἅρμα	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	2	nsubj	_	Gloss=chariot
7	καὶ	καί	CCONJ	_	_	8	cc	_	Gloss=and,also,even,then,next
8	ἱππεῖς	ἱππεύς	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	6	conj	_	Gloss=horseman|SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	καὶ	καί	CCONJ	_	_	11	cc	_	Gloss=and,also,even,then,next
11	ἐγένετο	γίνομαι	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Mid	2	conj	_	Gloss=to-become,come-to-be
12	ἡ	ὁ	DET	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	Gloss=the
13	παρεμβολὴ	παρεμβολή	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	11	nsubj	_	Gloss=camp
14	μεγάλη	μέγας	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	11	xcomp	_	Gloss=big,great
15	σφόδρα	σφόδρα	ADV	_	_	14	advmod	_	Gloss=very-much|SpaceAfter=No
16	.	.	PUNCT	_	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 cc:preconj	color:blue
1	καὶ	καί	CCONJ	_	_	2	cc	_	Gloss=and,also,even,then,next
2	εἴδομεν	εἴδω	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Gloss=to-see
3	ἐνύπνιον	ἐνύπνιον	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	2	obj	_	Gloss=dream
4	ἐν	ἐν	ADP	_	_	5	case	_	Gloss=in,on,by,with,to
5	νυκτὶ	νύξ	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	2	obl:tmod	_	Gloss=night
6	μιᾷ	εἷς	NUM	_	Case=Dat|Gender=Fem|Number=Sing|NumType=Card	5	nummod	_	Gloss=one|SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	ἐγώ	ἐγώ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Gloss=I
9	τε	τε	CCONJ	_	_	8	cc:preconj	_	Gloss=and,both,if|Unknown=particle/Conjunction
10	καὶ	καί	CCONJ	_	_	11	cc	_	Gloss=and,also,even,then,next
11	αὐτός	αὐτός	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Prs	8	conj	_	Gloss=he,she,it,-self,same|SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	_
13	ἕκαστος	ἕκαστος	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	18	nsubj	_	Gloss=each,every
14	κατὰ	κατά	ADP	_	_	16	case	_	Gloss=+G=down-from/upon;-+A=according-to,along
15	τὸ	ὁ	DET	_	Case=Acc,Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	16	det	_	Gloss=the
16	αὐτοῦ	αὐτός	PRON	_	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Prs	18	obl	_	Gloss=he,she,it,-self,same
17	ἐνύπνιον	ἐνύπνιον	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	18	obj	_	Gloss=dream
18	εἴδομεν	εἴδω	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	parataxis	_	Gloss=to-see|SpaceAfter=No
19	.	.	PUNCT	_	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc:preconj	color:blue
1	καὶ	καί	CCONJ	_	_	5	cc	_	Gloss=and,also,even,then,next
2	ἦσαν	εἰμί	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	Gloss=to-be
3	οἱ	ὁ	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Art	5	det	_	Gloss=the
4	δύο	δύο	NUM	_	Case=Acc,Gen,Nom|Gender=Fem,Masc,Neut|Number=Sing|NumType=Card	5	nsubj	_	Gloss=two
5	γυμνοί	γυμνός	ADJ	_	Case=Nom|Gender=Masc|Number=Plur	0	root	_	Gloss=naked|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	ὅ	ὁ	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Art	9	det	_	Gloss=who,which,that;-+enclitic=the
8	τε	τε	CCONJ	_	_	9	cc:preconj	_	Gloss=and,both,if|Unknown=particle/Conjunction
9	Ἀδὰμ	Ἀδάμ	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	5	dislocated	_	Gloss=Adam
10	καὶ	καί	CCONJ	_	_	12	cc	_	Gloss=and,also,even,then,next
11	ἡ	ὁ	DET	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	Gloss=the
12	γυνὴ	γυνή	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	9	conj	_	Gloss=woman,wife
13	αὐτοῦ	αὐτός	PRON	_	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Prs	12	nmod:poss	_	Gloss=he,she,it,-self,same|SpaceAfter=No
14	,	,	PUNCT	_	_	15	punct	_	_
15	καὶ	καί	CCONJ	_	_	17	cc	_	Gloss=and,also,even,then,next
16	οὐκ	οὐ	ADV	_	Polarity=Neg	17	advmod	_	Gloss=no,not
17	ᾐσχύνοντο	αἰσχύνω	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Mid,Pass	5	conj	_	Gloss=to-be-ashamed|SpaceAfter=No
18	.	.	PUNCT	_	_	17	punct	_	_

~~~


