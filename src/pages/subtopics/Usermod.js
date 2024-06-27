import React from "react";
import ArticleCode from "../../Components/ArticleCode";
import ArticlePara from "../../Components/ArticlePara";
import ArticleSubtitle from "../../Components/ArticleSubtitle";
import ArticleTitle from '../../Components/ArticleTitle'

const Usermod = () => {
  return (
    <div>
      <ArticleTitle>Benutzer anpassen</ArticleTitle>

      <ArticlePara>
        Nachdem Sie einen Benutzer erstellt haben, möchten Sie möglicherweise
        seine Eigenschaften anpassen oder ihn bestimmten Gruppen zuordnen. Dafür
        verwenden wir den Befehl usermod.
      </ArticlePara>
      <br />

      <ArticleSubtitle>Gruppe hinzufügen</ArticleSubtitle>

      <ArticlePara>
        Um einem Benutzer eine Gruppe hinzuzufügen, verwenden wir:
      </ArticlePara>

      <ArticleCode>
        sudo usermod -aG [Benutzergruppe] [Benutzername]
      </ArticleCode>

      <ArticlePara>
        Beispielsweise, um den Benutzer "testuser" zur Gruppe "testgroup"
        hinzuzufügen:
      </ArticlePara>

      <ArticleCode>sudo usermod -aG testgroup testuser</ArticleCode>
      <br />

      <ArticleSubtitle>Home-Verzeichnis ändern</ArticleSubtitle>

      <ArticlePara>
        Um das Home-Verzeichnis zu ändern, verwenden wir:
      </ArticlePara>

      <ArticleCode>sudo usermod -d [Verzeichnis] [Benutzername]</ArticleCode>
      <br />

      <ArticlePara>
        Beispielsweise, um das Home-Verzeichnis auf /etc zu ändern:
      </ArticlePara>

      <ArticleCode>sudo usermod -d /etc testuser</ArticleCode>
      <br />

      <ArticlePara>
        Beachten Sie, dass der Benutzer abgemeldet sein muss, bevor Sie sein
        Home-Verzeichnis ändern, und dass das Home-Verzeichnis existieren
        sollte, oder Sie verwenden die Option -m, um es zu
        erstellen und zu verschieben:
      </ArticlePara>

      <ArticleCode>sudo usermod -d /etc -m testuser</ArticleCode>
      <br />

      <ArticleSubtitle>Löschungsdatum</ArticleSubtitle>

      <ArticlePara>
        Datum, bis zu dem das Benutzerkonto gültig sein soll. Das Datum ist im
        Format YYYY-MM-DD anzugeben.
      </ArticlePara>

      <ArticleCode>sudo usermod -e [YYYY-MM-DD] testuser</ArticleCode>
      <br />

      <ArticleSubtitle>Inaktivität</ArticleSubtitle>

      <ArticlePara>
        Die Anzahl der Tage, die vergehen, bis das Konto permanent erlischt,
        nachdem das zugehörige Passwort abgelaufen ist. Ein Wert von 0
        deaktiviert den Account, sobald das Passwort seine Gültigkeit verliert.
        Ein Wert von -1 schaltet dieses Feature ganz ab. Der Standardwert ist
        -1.
      </ArticlePara>

      <ArticleCode>sudo usermod -f [Tage] testuser</ArticleCode>
      <br />

      <ArticleSubtitle>Neuer Name</ArticleSubtitle>

      <ArticlePara>
        Mit dem Parameter -l können wir den Namen des Benutzers
        ändern.
      </ArticlePara>

      <ArticleCode>sudo usermod -l [neuer Name] [Benutzer]</ArticleCode>
      <br />

      <ArticleSubtitle>Benutzer sperren</ArticleSubtitle>

      <ArticlePara>
        Das Passwort des Benutzers blockieren (Zugang sperren). Diese Option
        darf nicht zusammen mit -p oder -U angegeben
        werden.
      </ArticlePara>

      <ArticleCode>sudo usermod -L [Benutzer]</ArticleCode>
      <br />

      <ArticleSubtitle>Benutzer entsperren</ArticleSubtitle>

      <ArticlePara>
        Passwort, das mit -L blockiert wurde, wieder freigeben.
        Diese Option darf nicht zusammen mit -p oder{" "}
        -L verwendet werden.
      </ArticlePara>

      <ArticleCode>sudo usermod -U [Benutzer]</ArticleCode>
      <br />
      <ArticleSubtitle>Passwort ändern</ArticleSubtitle>

      <ArticlePara>
        Um das Passwort eines Benutzers zu ändern, verwenden Sie die Option{" "}
        -p und geben Sie das neue Passwort an.
      </ArticlePara>

      <ArticleCode>sudo usermod -p [neues Passwort] [Benutzer]</ArticleCode>
      <br />
      <ArticlePara>
        Die Verwendung von usermod -p wird nicht empfohlen, da das
        Passwort im Klartext in der Befehlszeile angegeben wird und somit
        unsicher ist.
      </ArticlePara>

      <ArticleCode>sudo passwd [Benutzername]</ArticleCode>
      <br />
      <br />

    </div>
  );
};

export default Usermod;
