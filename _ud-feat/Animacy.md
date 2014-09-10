---
layout: base
title: 'Animacy'
shortdef: 'animacy'
---

## {{ page.title }}: {{ page.shortdef }}

Similarly to Gender (and to the African noun classes), animateness
is usually a lexical feature of nouns and inflectional feature of
other parts of speech that mark agreement with nouns. It is
independent of gender, therefore it is encoded separately in some
tagsets (e.g. all the Multext-East tagsets). On the other hand, in
Czech the (almost) only grammatical implications occur within the
masculine gender, which is why the PDT tagset does not have
animateness as separate feature and instead defines four genders:
masculine animate, masculine inanimate, feminine and neuter. I
suggest following the two-feature approach used in Multext-East (many
languages) because it seems to be safer.

Polish is special in that it also distinguishes grammatically
human vs. non-human animates. It can be demonstrated by inflection of
the example word <I>który</I>
(which) (boldface forms differ from the middle row):

<TABLE WIDTH=643 CELLPADDING=2 CELLSPACING=0>
	<TR>
		<TD WIDTH=49>
			<FONT SIZE=2>gender </FONT>
		</TD>
		<TD WIDTH=44>
			<FONT SIZE=2>sg-nom </FONT>
		</TD>
		<TD WIDTH=45>
			<FONT SIZE=2>sg-gen </FONT>
		</TD>
		<TD WIDTH=49>
			<FONT SIZE=2>sg-dat </FONT>
		</TD>
		<TD WIDTH=45>
			<FONT SIZE=2>sg-acc </FONT>
		</TD>
		<TD WIDTH=43>
			<FONT SIZE=2>sg-ins </FONT>
		</TD>
		<TD WIDTH=43>
			<FONT SIZE=2>sg-loc </FONT>
		</TD>
		<TD WIDTH=43>
			<FONT SIZE=2>pl-nom </FONT>
		</TD>
		<TD WIDTH=45>
			<FONT SIZE=2>pl-gen </FONT>
		</TD>
		<TD WIDTH=43>
			<FONT SIZE=2>pl-dat </FONT>
		</TD>
		<TD WIDTH=49>
			<FONT SIZE=2>pl-acc </FONT>
		</TD>
		<TD WIDTH=47>
			<FONT SIZE=2>pl-ins </FONT>
		</TD>
		<TD WIDTH=45>
			<FONT SIZE=2>pl-loc </FONT>
		</TD>
	</TR>
	<TR>
		<TD WIDTH=49>
			<FONT SIZE=2>animate human </FONT>
		</TD>
		<TD WIDTH=44>
			<FONT SIZE=2>który </FONT>
		</TD>
		<TD WIDTH=45>
			<FONT SIZE=2>którego </FONT>
		</TD>
		<TD WIDTH=49>
			<FONT SIZE=2>któremu </FONT>
		</TD>
		<TD WIDTH=45>
			<FONT SIZE=2>którego </FONT>
		</TD>
		<TD WIDTH=43>
			<FONT SIZE=2>którym </FONT>
		</TD>
		<TD WIDTH=43>
			<FONT SIZE=2>którym </FONT>
		</TD>
		<TD WIDTH=43>
			<STRONG><FONT SIZE=2>którzy</FONT></STRONG><FONT SIZE=2> </FONT>
		</TD>
		<TD WIDTH=45>
			<FONT SIZE=2>których </FONT>
		</TD>
		<TD WIDTH=43>
			<FONT SIZE=2>którym </FONT>
		</TD>
		<TD WIDTH=49>
			<STRONG><FONT SIZE=2>których</FONT></STRONG><FONT SIZE=2> </FONT>
		</TD>
		<TD WIDTH=47>
			<FONT SIZE=2>którymi </FONT>
		</TD>
		<TD WIDTH=45>
			<FONT SIZE=2>których </FONT>
		</TD>
	</TR>
	<TR>
		<TD WIDTH=49>
			<FONT SIZE=2>animate non-human </FONT>
		</TD>
		<TD WIDTH=44>
			<FONT SIZE=2>który </FONT>
		</TD>
		<TD WIDTH=45>
			<FONT SIZE=2>którego </FONT>
		</TD>
		<TD WIDTH=49>
			<FONT SIZE=2>któremu </FONT>
		</TD>
		<TD WIDTH=45>
			<FONT SIZE=2>którego </FONT>
		</TD>
		<TD WIDTH=43>
			<FONT SIZE=2>którym </FONT>
		</TD>
		<TD WIDTH=43>
			<FONT SIZE=2>którym </FONT>
		</TD>
		<TD WIDTH=43>
			<FONT SIZE=2>które </FONT>
		</TD>
		<TD WIDTH=45>
			<FONT SIZE=2>których </FONT>
		</TD>
		<TD WIDTH=43>
			<FONT SIZE=2>którym </FONT>
		</TD>
		<TD WIDTH=49>
			<FONT SIZE=2>które </FONT>
		</TD>
		<TD WIDTH=47>
			<FONT SIZE=2>którymi </FONT>
		</TD>
		<TD WIDTH=45>
			<FONT SIZE=2>których </FONT>
		</TD>
	</TR>
	<TR>
		<TD WIDTH=49>
			<FONT SIZE=2>in-animate </FONT>
		</TD>
		<TD WIDTH=44>
			<FONT SIZE=2>który </FONT>
		</TD>
		<TD WIDTH=45>
			<FONT SIZE=2>którego </FONT>
		</TD>
		<TD WIDTH=49>
			<FONT SIZE=2>któremu </FONT>
		</TD>
		<TD WIDTH=45>
			<STRONG><FONT SIZE=2>który</FONT></STRONG><FONT SIZE=2> </FONT>
		</TD>
		<TD WIDTH=43>
			<FONT SIZE=2>którym </FONT>
		</TD>
		<TD WIDTH=43>
			<FONT SIZE=2>którym </FONT>
		</TD>
		<TD WIDTH=43>
			<FONT SIZE=2>które </FONT>
		</TD>
		<TD WIDTH=45>
			<FONT SIZE=2>których </FONT>
		</TD>
		<TD WIDTH=43>
			<FONT SIZE=2>którym </FONT>
		</TD>
		<TD WIDTH=49>
			<FONT SIZE=2>które </FONT>
		</TD>
		<TD WIDTH=47>
			<FONT SIZE=2>którymi </FONT>
		</TD>
		<TD WIDTH=45>
			<FONT SIZE=2>których</FONT>
		</TD>
	</TR>
</TABLE>

### Anim: animate

Human beings, animals, fictional characters, names of professions
etc. are all animate. Even nouns that are normally inanimate can be
inflected as animate if they are personified. For instance, consider
a children's story about cars where cars live and talk as people;
then the cars may become and be inflected as animates.

### Nhum: animate but non-human

Attested in Polish. In languages where Nhum is used, Anim is
restricted to human beings (complement of Nhum).

### Inan: inanimate

Nouns that are not
animate are inanimate. (If Nhum is used, nouns that are neither Anim
nor Nhum are Inan.)
