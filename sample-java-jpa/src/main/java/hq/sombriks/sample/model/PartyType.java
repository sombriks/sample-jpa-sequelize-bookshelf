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
@Table(name = "party_type")
public class PartyType {

  public PartyType() {
  }

  public PartyType(int id) {
    this.id = id;
  }

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "party_type_id")
  private Integer id;

  @Column(name = "party_type_description")
  private String description;
  
}