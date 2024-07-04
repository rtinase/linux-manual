import ArticlePara from "../../Components/ArticlePara";
import ArticleTitle from '../../Components/ArticleTitle';
import ArtileImage from "../../Components/ArticleImage";

const LinusTorvalds = () => (
  <>
    <ArticleTitle>Linus Torvalds</ArticleTitle>
    <div style={{width: "20%", float: "right", "padding-left": "1rem"}}>
    <ArtileImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg/640px-LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg"></ArtileImage>
    </div>
    <ArticlePara>
      Linus Torvalds wurde am 28. Dezember 1969 in Helsinki, Finnland, geboren. Er begann seine Karriere in der Informatik an der Universität Helsinki. Während seines Studiums stieß er auf das Betriebssystem Minix, das von Andrew S. Tanenbaum entwickelt wurde. Unzufrieden mit einigen Aspekten von Minix, entschied sich Torvalds, ein eigenes Betriebssystem zu entwickeln, das er „Linux“ nannte.
    </ArticlePara>
    <ArticlePara>
      Der erste Linux-Kernel, den Torvalds 1991 veröffentlichte, war ein bedeutender Schritt in der Geschichte der Informatik. Torvalds’ Entscheidung, den Quellcode unter der GNU General Public License (GPL) freizugeben, ermöglichte es anderen Entwicklern, den Code zu verwenden, zu modifizieren und weiterzuentwickeln. Dies legte den Grundstein für die Open-Source-Bewegung und machte Linux zu einem der erfolgreichsten Open-Source-Projekte der Welt.
    </ArticlePara>
    <ArticlePara>
      Torvalds ist bis heute aktiv in der Entwicklung des Linux-Kernels involviert. Er leitet das Linux-Kernel-Projekt und ist für die endgültige Genehmigung von Änderungen am Kernel verantwortlich. Trotz seiner führenden Rolle bleibt Torvalds bescheiden und betont, dass der Erfolg von Linux auf der Zusammenarbeit und den Beiträgen von Tausenden von Entwicklern weltweit beruht.
    </ArticlePara>
    <ArticlePara>
      Neben seiner Arbeit am Linux-Kernel hat Torvalds auch andere Projekte ins Leben gerufen, darunter das verteilte Versionskontrollsystem Git, das ebenfalls weit verbreitet und äußerst einflussreich ist. Torvalds’ Beitrag zur Softwareentwicklung und zur Open-Source-Community ist enorm, und sein Einfluss wird noch viele Jahre spürbar sein.
    </ArticlePara>
  </>
);

export default LinusTorvalds;
