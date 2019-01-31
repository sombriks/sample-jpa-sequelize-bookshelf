package hq.sombriks.sample.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "invite_type")
public class InviteType {

  public InviteType() {
  }

  public InviteType(int id) {
    this.id = id;
  }

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "invite_status_id")
  private Integer id;

  @Column(name = "invite_status_description")
  private String description;

}