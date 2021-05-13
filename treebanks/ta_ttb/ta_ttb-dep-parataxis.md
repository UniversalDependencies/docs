---
layout: base
title:  'Statistics of parataxis in UD_Tamil-TTB'
udver: '2'
---

## Treebank Statistics: UD_Tamil-TTB: Relations: `parataxis`

This relation is universal.

5 nodes (0%) are attached to their parents as `parataxis`.

5 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.4.

The following 4 pairs of parts of speech are connected with `parataxis`: <tt><a href="ta_ttb-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_ttb-pos-AUX.html">AUX</a></tt> (2; 40% instances), <tt><a href="ta_ttb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ta_ttb-pos-AUX.html">AUX</a></tt> (1; 20% instances), <tt><a href="ta_ttb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ta_ttb-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="ta_ttb-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_ttb-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 parataxis	color:blue
1	இது	இது	PRON	RpN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	nsubj	6:nsubj	Translit=itu|LTranslit=itu
2	சர்வதேச	சர்வதேசம்	PROPN	NO--3SN--	Gender=Neut|Number=Sing|Person=3	3	nmod	3:nmod	Translit=carvatēca|LTranslit=carvatēcam
3	விதிமுறைகளைக்	விதிமுறை	NOUN	NNA-3PN--	Case=Acc|Gender=Neut|Number=Plur|Person=3	4	obj	4:obj	Translit=vitimuraikaḷaik|LTranslit=vitimurai
4	காட்டிலும்	காட்டிலும்	PART	Tb-------	_	6	advmod	6:advmod	Translit=kāṭṭilum|LTranslit=kāṭṭilum
5	முற்றிலும்	முற்றிலும்	ADV	AA-------	_	6	advmod	6:advmod	Translit=murrilum|LTranslit=murrilum
6	மாறுபட்ட்	மாறுபடு	VERB	Vt-T---AA	Polarity=Pos|VerbForm=Part|Voice=Act	0	root	0:root	Translit=mārupaṭṭ|LTranslit=mārupaṭu
7	உள்ளது	உள்	AUX	VR-T3SNAA	Gender=Neut|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin|Voice=Act	6	parataxis	6:parataxis	Translit=uḷḷatu|LTranslit=uḷ
8	.	.	PUNCT	Z#-------	PunctType=Peri	6	punct	6:punct	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 22 parataxis	color:blue
1	எனக்கு	என்	PRON	RpD-1SA--	Animacy=Anim|Case=Dat|Gender=Com|Number=Sing|Person=1|PronType=Prs	4	obl:arg	4:obl:arg:dat	Translit=enakku|LTranslit=en
2	ஆயுள்	ஆயுள்	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	3	nmod	3:nmod:nom	Translit=āyuḷ|LTranslit=āyuḷ
3	தண்டனை	தண்டனை	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	4	obj	4:obj	Translit=taṇṭanai|LTranslit=taṇṭanai
4	விதித்தால்	விதி	VERB	Vw-T---AA	Mood=Cnd|Polarity=Pos|VerbForm=Fin|Voice=Act	20	advcl	20:advcl:உம்	Translit=vitittāl|LTranslit=viti
5	உம்	உம்	PART	Ts-------	_	4	mark	4:mark	Translit=um|LTranslit=um
6	அல்லது	அல்லது	CCONJ	CC-------	_	11	cc	11:cc	Translit=allatu|LTranslit=allatu
7	சாகும்	சாகு	ADJ	Jd-F----A	Polarity=Pos|Tense=Fut|VerbForm=Part	8	amod	8:amod	Translit=cākum|LTranslit=cāku
8	வரை	வரை	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	11	obl	11:obl:nom	Translit=varai|LTranslit=varai
9	சிறையில்	சிறை	NOUN	NNL-3SN--	Case=Loc|Gender=Neut|Number=Sing|Person=3	11	obl	11:obl:loc	Translit=ciraiyil|LTranslit=cirai
10	ஏயே	ஏயே	PART	Tk-------	_	9	advmod:emph	9:advmod:emph	Translit=ēyē|LTranslit=ēyē
11	அடைத்து	அதை	VERB	Vt-T---AA	Polarity=Pos|VerbForm=Part|Voice=Act	4	conj	4:conj|20:advcl:உம்	Translit=aṭaittu|LTranslit=atai
12	வைத்தால்	வை	AUX	VW-T---AA	Mood=Cnd|Polarity=Pos|VerbForm=Fin|Voice=Act	11	aux	11:aux	Translit=vaittāl|LTranslit=vai
13	உம்	உம்	PART	Ts-------	_	11	mark	11:mark	Translit=um|LTranslit=um
14	செய்யாத	செய்	ADJ	Jd-T----N	Polarity=Neg|VerbForm=Part	15	amod	15:amod	Translit=ceyyāta|LTranslit=cey
15	குற்றத்துக்க்	குற்றம்	NOUN	NND-3SN--	Case=Dat|Gender=Neut|Number=Sing|Person=3	16	obl	16:obl:dat	Translit=kurrattukk|LTranslit=kurram
16	ஆக	ஆக	ADV	AA-------	_	20	advmod	20:advmod	Translit=āka|LTranslit=āka
17	யார்	யார்	PRON	RiN-3SA--	Animacy=Anim|Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Int	20	obl	20:obl:இடம்:nom	Translit=yār|LTranslit=yār
18	இடம்	இடம்	ADP	PP-------	AdpType=Post	17	case	17:case	Translit=iṭam|LTranslit=iṭam
19	உம்	உம்	PART	Tv-------	_	17	advmod:emph	17:advmod:emph	Translit=um|LTranslit=um
20	மன்னிப்பு	மன்னிப்பு	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	0	root	0:root	Translit=mannippu|LTranslit=mannippu
21	கேட்க	கேள்	VERB	Vu-T---AA	Polarity=Pos|VerbForm=Inf|Voice=Act	20	acl	20:acl	Translit=kēṭka|LTranslit=kēḷ
22	மாட்டேன்	மாட்டு	AUX	VR-T1SAAA	Animacy=Anim|Gender=Com|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|VerbForm=Fin|Voice=Act	20	parataxis	20:parataxis	SpaceAfter=No|Translit=māṭṭēn|LTranslit=māṭṭu
23	.	.	PUNCT	Z#-------	PunctType=Peri	20	punct	20:punct	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 parataxis	color:blue
1	பாகிஸ்தான்	பாகிஸ்தான்	PROPN	NEN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	2	nmod	2:nmod:nom	Translit=pākistān|LTranslit=pākistān
2	சிறையில்	சிறை	NOUN	NNL-3SN--	Case=Loc|Gender=Neut|Number=Sing|Person=3	3	obl	3:obl:loc	Translit=ciraiyil|LTranslit=cirai
3	அடைக்க	அடை	VERB	Vu-T---AA	Polarity=Pos|VerbForm=Inf|Voice=Act	5	advcl	5:advcl	Translit=aṭaikka|LTranslit=aṭai
4	ப்பட்ட்	படு	AUX	VT-T---PA	Polarity=Pos|VerbForm=Part|Voice=Pass	3	aux	3:aux	Translit=ppaṭṭ|LTranslit=paṭu
5	இருந்த	இரு	ADJ	Jd-D----A	Polarity=Pos|Tense=Past|VerbForm=Part	8	amod	8:amod	Translit=irunta|LTranslit=iru
6	100	100	NUM	U=-------	NumForm=Digit|NumType=Card	8	nummod	8:nummod	Translit=100|LTranslit=100
7	இந்திய	இந்தியா	PROPN	NO--3SN--	Gender=Neut|Number=Sing|Person=3	8	nmod	8:nmod	Translit=intiya|LTranslit=intiyā
8	மீனவர்கள்	மீனவர்	NOUN	NNN-3PA--	Animacy=Anim|Case=Nom|Gender=Com|Number=Plur|Person=3	10	nsubj	10:nsubj	Translit=mīnavarkaḷ|LTranslit=mīnavar
9	இன்று	இன்று	ADV	AA-------	_	10	advmod	10:advmod	Translit=inru|LTranslit=inru
10	விடுதலை	விடுதலை	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	0	root	0:root	Translit=viṭutalai|LTranslit=viṭutalai
11	செய்யப்	செய்	VERB	Vu-T---AA	Polarity=Pos|VerbForm=Inf|Voice=Act	10	parataxis	10:parataxis	Translit=ceyyap|LTranslit=cey
12	பட்டனர்	படு	AUX	VR-D3PHPA	Gender=Com|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Polite=Form|Tense=Past|VerbForm=Fin|Voice=Pass	10	aux	10:aux	SpaceAfter=No|Translit=paṭṭanar|LTranslit=paṭu
13	.	.	PUNCT	Z#-------	PunctType=Peri	10	punct	10:punct	Translit=.|LTranslit=.

~~~


